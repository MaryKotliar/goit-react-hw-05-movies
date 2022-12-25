import { fetchTrendingMovies } from 'api';
import { Movieslist } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getMovies() {
      try {
        const movies = await fetchTrendingMovies();

        setMovies(prevMovies => [...prevMovies, ...movies]);
        console.log(movies);
      } catch {}
    }
    getMovies();
  }, []);

  return (
    <main>
      <h1>Trending Movies</h1>
      <Movieslist movies={movies} />
    </main>
  );
};
