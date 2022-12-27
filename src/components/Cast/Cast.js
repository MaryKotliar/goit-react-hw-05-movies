import { useState, useEffect } from 'react';
import { fetchCastInfo } from 'api';
import { useParams } from 'react-router-dom';
import { PhotoWrapper } from './Cast.styled';

export const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getCastInfo() {
      try {
        const { cast } = await fetchCastInfo(id);
        console.log(cast);
        setCastInfo(cast);
      } catch {}
    }

    getCastInfo();
  }, [id]);
  function getPoster(poster) {
    if (poster === null) {
      return 'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg';
    } else {
      return `https://image.tmdb.org/t/p/w300/${poster}`;
    }
  }

  return (
    <ul>
      {castInfo.map(({ original_name, id, profile_path, character }) => (
        <li key={id}>
          <PhotoWrapper>
            <img src={getPoster(profile_path)} alt="poster" />
          </PhotoWrapper>
          <p>{original_name}</p>
          <p>Character:{character}</p>
        </li>
      ))}
    </ul>
  );
};
