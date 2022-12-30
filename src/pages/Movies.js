import { SearchBox } from 'components/SearchBox/SearchBox';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByName } from 'api';
import { useState, useEffect } from 'react';
import { Movieslist } from 'components/MoviesList/MoviesList';
import { ColorRing } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setlLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const nameQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (nameQuery === '') return;
    async function getMoviesByName() {
      try {
        setlLoading(true);
        setError(false);

        const movies = await fetchMovieByName(nameQuery);

        setMovies(movies);
        if (movies.length < 1) {
          toast.error(
            'Sorry, we didn`t find movies according to your request.'
          );
        }
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setlLoading(false);
      }
    }
    getMoviesByName();
  }, [nameQuery]);

  const onSubmit = name => {
    setSearchParams(name !== '' ? { query: name } : {});
  };
  return (
    <main>
      <SearchBox value={nameQuery} onSubmit={onSubmit}></SearchBox>

      {movies && <Movieslist movies={movies} />}
      {error && toast.error("This didn't work.Please try again later !")}
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
      <Toaster position="top-right" />
    </main>
  );
};
export default Movies;
