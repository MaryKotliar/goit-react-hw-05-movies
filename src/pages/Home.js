import { fetchTrendingMovies } from 'api';
import { Movieslist } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';

import { Loader } from 'components/Loader';
import toast, { Toaster } from 'react-hot-toast';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setlLoading] = useState(false);
  useEffect(() => {
    async function getMovies() {
      try {
        setlLoading(true);
        setError('');
        const movies = await fetchTrendingMovies();

        setMovies(prevMovies => [...prevMovies, ...movies]);
      } catch (error) {
        setError('This didn`t work. Please try again later.');
      } finally {
        setlLoading(false);
      }
    }
    getMovies();
  }, []);
  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);
  return (
    <main>
      <h1>Trending Movies</h1>
      {loading && <Loader />}

      {movies && <Movieslist movies={movies} />}
      <Toaster position="top-right" />
    </main>
  );
};
export default Home;
