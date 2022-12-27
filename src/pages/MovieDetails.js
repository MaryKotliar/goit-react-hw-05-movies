import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieById } from 'api';
export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function getMovieById() {
      try {
        const movie = fetchMovieById(id);
        console.log(movie);
        setMovie(movie);
        console.log(movie);
      } catch {}
    }
    getMovieById();
  }, [id]);
  console.log(movie);
  const { poster_path, original_title, vote_average, overview, genres } = movie;
  return (
    <div>
      <div>
        <img />
        <h1>{original_title}</h1>
        <p></p>
        <h2></h2>
        <p></p>
        <h2></h2>
        <p></p>
      </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};
