export const Movieslist = ({ movies }) => {
  function getPoster(poster) {
    if (poster === null) {
      return 'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg';
    } else {
      return `https://image.tmdb.org/t/p/w300/${poster}`;
    }
  }

  return (
    <div>
      <ul>
        {movies.map(({ id, original_title, poster_path, name }) => (
          <li key={id}>
            <img src={getPoster(poster_path)} alt="poster" />
            <p>{original_title ?? name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
