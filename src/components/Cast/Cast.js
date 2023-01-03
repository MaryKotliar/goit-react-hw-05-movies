import { useState, useEffect } from 'react';
import { fetchCastInfo } from 'api';
import { useParams } from 'react-router-dom';
import { PhotoWrapper, Container } from './Cast.styled';
import { Loader } from 'components/Loader';
import toast, { Toaster } from 'react-hot-toast';
const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const [loading, setlLoading] = useState(false);
  const [error, setError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function getCastInfo() {
      try {
        setlLoading(true);
        setError('');
        const { cast } = await fetchCastInfo(id);
        setCastInfo(cast);
      } catch (error) {
        setError('This didn`t work. Please try again later.');
      } finally {
        setlLoading(false);
      }
    }

    getCastInfo();
  }, [id]);
  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  function getPoster(poster) {
    if (poster === null) {
      return 'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg';
    } else {
      return `https://image.tmdb.org/t/p/w300/${poster}`;
    }
  }

  return (
    <>
      {loading && <Loader />}

      <Container>
        {castInfo.map(({ original_name, id, profile_path, character }) => (
          <li key={id}>
            <PhotoWrapper>
              <img src={getPoster(profile_path)} alt="poster" />
            </PhotoWrapper>
            <p>{original_name}</p>
            <p>Character:{character}</p>
          </li>
        ))}
      </Container>
      <Toaster position="top-right" />
    </>
  );
};
export default Cast;
