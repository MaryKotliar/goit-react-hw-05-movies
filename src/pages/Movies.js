import { SearchBox } from 'components/SearchBox/SearchBox';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByName } from 'api';
import { useState, useEffect } from 'react';
import { Movieslist } from 'components/MoviesList/MoviesList';
export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name') ?? '';
  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (name === '') return;
    async function getMoviesByName() {
      try {
        const movies = await fetchMovieByName(name);

        setMovies(movies);
        console.log(movies);
      } catch {}
    }
    getMoviesByName();
  }, [name]);
  // const visibleMovies = movies.filter(movie =>
  //   movie.name.toLowerCase().includes(name.toLowerCase())
  // );
  return (
    <main>
      <SearchBox value={name} onChange={updateQueryString}></SearchBox>
      {/* <Movieslist movies={movies} /> */}
    </main>
  );
};
