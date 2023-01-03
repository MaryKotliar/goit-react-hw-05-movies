import { SearchBox } from 'components/SearchBox/SearchBox';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByName } from 'api';
import { useState, useEffect } from 'react';
import { Movieslist } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader';
import toast, { Toaster } from 'react-hot-toast';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setlLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const nameQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (nameQuery === '') return;
    async function getMoviesByName() {
      try {
        setlLoading(true);
        setError('');

        const movies = await fetchMovieByName(nameQuery);

        setMovies(movies);
        if (movies.length < 1) {
          setError('Sorry, we didn`t find movies according to your request.');
        }
      } catch (error) {
        setError('This didn`t work. Please try again later.');
      } finally {
        setlLoading(false);
      }
    }
    getMoviesByName();
  }, [nameQuery]);
  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  const onSubmit = name => {
    setSearchParams(name !== '' ? { query: name } : {});
    if (name === '') {
      setError('Please input search query!');
    }
  };
  return (
    <main>
      <SearchBox value={nameQuery} onSubmit={onSubmit}></SearchBox>

      {movies && <Movieslist movies={movies} />}

      {loading && <Loader />}
      <Toaster position="top-right" />
    </main>
  );
};
export default Movies;
