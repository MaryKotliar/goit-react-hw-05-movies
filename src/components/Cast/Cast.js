import { useState, useEffect } from 'react';
import { fetchCastInfo } from 'api';
import { useParams } from 'react-router-dom';
import { PhotoWrapper, Container } from './Cast.styled';
import { ColorRing } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const [loading, setlLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getCastInfo() {
      try {
        setlLoading(true);
        setError(false);
        const { cast } = await fetchCastInfo(id);
        setCastInfo(cast);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setlLoading(false);
      }
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
    <>
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
      {error && toast.error("This didn't work.Please try again later !")}
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
