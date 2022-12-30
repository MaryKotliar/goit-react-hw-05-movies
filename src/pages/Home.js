import { fetchTrendingMovies } from 'api';
import { Movieslist } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setlLoading] = useState(false);
  useEffect(() => {
    async function getMovies() {
      try {
        setlLoading(true);
        setError(false);
        const movies = await fetchTrendingMovies();

        setMovies(prevMovies => [...prevMovies, ...movies]);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setlLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <main>
      <h1>Trending Movies</h1>
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
      {movies && <Movieslist movies={movies} />}
      <Toaster position="top-right" />
    </main>
  );
};
export default Home;
