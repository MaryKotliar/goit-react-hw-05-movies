import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchMovieById } from 'api';
import {
  AddInfoWrapper,
  AddInfoItem,
  InfoWrapper,
  MovieInfoWrapper,
  PosterWrapper,
} from './MovieDetails.styled';
import { Link } from 'react-router-dom';
import { Loader } from 'components/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { GoBackLink } from 'components/GoBackLink/GoBackLink';
function getPoster(poster) {
  if (!poster) {
    return 'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg';
  } else {
    return `https://image.tmdb.org/t/p/w300/${poster}`;
  }
}
const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setlLoading] = useState(false);
  const [error, setError] = useState('');
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  useEffect(() => {
    async function getMovieById() {
      try {
        setlLoading(true);
        setError('');
        const movieData = await fetchMovieById(id);

        setMovie(movieData);
      } catch (error) {
        setError('This didn`t work. Please try again later.');
      } finally {
        setlLoading(false);
      }
    }
    getMovieById();
  }, [id]);
  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  const { poster_path, original_title, vote_average, overview, genres } = movie;
  const userScore = Math.round(vote_average * 10);
  return (
    <div>
      {loading && <Loader />}

      {!error && !loading && <GoBackLink to={backLinkHref}>Go Back</GoBackLink>}
      {!error && !loading && (
        <MovieInfoWrapper>
          <PosterWrapper>
            <img src={getPoster(poster_path)} alt="poster" />
          </PosterWrapper>
          <InfoWrapper>
            <h1>{original_title}</h1>
            <p>User Score: {userScore}%</p>
            <h2>Overview</h2>
            {overview ? <p>{overview}</p> : 'Overview is not available.'}
            <h2>Genres</h2>
            {genres
              ? genres.map((genre, index) => <p key={index}>{genre.name}</p>)
              : 'Genres is not available'}
          </InfoWrapper>
        </MovieInfoWrapper>
      )}
      {!error && !loading && (
        <AddInfoWrapper>
          <ul>
            Additional Information
            <AddInfoItem>
              <Link to="cast" state={{ from: backLinkHref }}>
                Cast
              </Link>
            </AddInfoItem>
            <AddInfoItem>
              <Link to="reviews">Reviews</Link>
            </AddInfoItem>
          </ul>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </AddInfoWrapper>
      )}

      <Toaster position="top-right" />
    </div>
  );
};
export default MovieDetails;
