import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchMovieById } from 'api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import {
  AddInfoWrapper,
  AddInfoItem,
  MovieInfoWrapper,
} from './MovieDetails.styled';
import { Loader } from 'components/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { GoBackLink } from 'components/GoBackLink/GoBackLink';

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

  return (
    <div>
      {loading && <Loader />}
      {!error && !loading && <GoBackLink to={backLinkHref}>Go Back</GoBackLink>}
      {!error && !loading && (
        <MovieInfoWrapper>
          <MovieInfo movie={movie} />
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
              <Link to="reviews" state={{ from: backLinkHref }}>
                Reviews
              </Link>
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
