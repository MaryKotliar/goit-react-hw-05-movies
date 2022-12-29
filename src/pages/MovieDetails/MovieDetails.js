import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieById } from 'api';
import { MovieInfoWrapper, PosterWrapper } from './MovieDetails.styled';
import { Link } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setlLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function getMovieById() {
      try {
        setlLoading(true);
        setError(false);
        const movieData = await fetchMovieById(id);

        setMovie(movieData);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setlLoading(false);
      }
    }
    getMovieById();
  }, [id]);

  function getPoster(poster) {
    if (poster === null) {
      return 'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg';
    } else {
      return `https://image.tmdb.org/t/p/w300/${poster}`;
    }
  }
  const { poster_path, original_title, vote_average, overview, genres } = movie;
  const userScore = Math.round(vote_average * 10);
  return (
    <div>
      {loading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      )}
      {error && toast.error("This didn't work.Please try again later !")}
      <MovieInfoWrapper>
        <PosterWrapper>
          <img src={getPoster(poster_path)} alt="poster" />
        </PosterWrapper>
        <div>
          <h1>{original_title}</h1>
          <p>User Score: {userScore}%</p>
          <h2>Overview</h2>
          {overview ? <p>{overview}</p> : 'Overview is not available.'}
          <h2>Genres</h2>
          {genres
            ? genres.map((genre, index) => <p key={index}>{genre.name}</p>)
            : 'Genres is not available'}
        </div>
      </MovieInfoWrapper>
      <div>
        <ul>
          Additional Information
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
      <Toaster position="top-right" />
    </div>
  );
};
