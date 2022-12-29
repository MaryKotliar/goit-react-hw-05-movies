import { MovieName, Container, CardWrapper } from './MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';
export const Movieslist = ({ movies }) => {
  function getPoster(poster) {
    if (poster === null) {
      return 'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg';
    } else {
      return `https://image.tmdb.org/t/p/w300/${poster}`;
    }
  }
  const location = useLocation();
  return (
    <>
      <Container>
        {movies.map(({ id, original_title, poster_path, name }) => (
          <CardWrapper key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img src={getPoster(poster_path)} alt="poster" />
              <MovieName>{original_title ?? name}</MovieName>
            </Link>
          </CardWrapper>
        ))}
      </Container>
    </>
  );
};
