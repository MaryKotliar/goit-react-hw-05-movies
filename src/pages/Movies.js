import { SearchBox } from 'components/SearchBox/SearchBox';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByName } from 'api';
import { useState, useEffect } from 'react';
import { Movieslist } from 'components/MoviesList/MoviesList';
export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const nameQuery = searchParams.get('query') ?? '';
  // const updateQueryString = name => {
  //   const nextParams = name !== '' ? { name } : {};
  //   setSearchParams(nextParams);
  // };

  useEffect(() => {
    if (nameQuery === '') return;
    async function getMoviesByName() {
      try {
        const movies = await fetchMovieByName(nameQuery);

        setMovies(movies);
        console.log(movies);
      } catch {}
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
    </main>
  );
};
