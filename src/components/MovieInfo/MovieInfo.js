import { PosterWrapper, InfoWrapper } from './MovieInfo.styled';
export const MovieInfo = ({
  movie: { poster_path, original_title, vote_average, overview, genres },
}) => {
  const userScore = Math.round(vote_average * 10);
  function getPoster(poster) {
    if (!poster) {
      return 'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg';
    } else {
      return `https://image.tmdb.org/t/p/w300/${poster}`;
    }
  }
  return (
    <>
      <PosterWrapper>
        <img src={getPoster(poster_path)} alt="poster" />
      </PosterWrapper>
      <InfoWrapper>
        <h1>{original_title}</h1>
        <p>User Score: {userScore}%</p>
        <h2>Overview</h2>
        {overview ? <p>{overview}</p> : 'Overview is not available.'}
        <h2>Genres</h2>
        {genres
          ? genres.map((genre, index) => <p key={index}>{genre.name}</p>)
          : 'Genres is not available'}
      </InfoWrapper>
    </>
  );
};
