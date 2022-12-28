import { useState, useEffect } from 'react';
import { fetchReviews } from 'api';
import { useParams } from 'react-router-dom';
export const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const { id } = useParams();
  useEffect(() => {
    async function getReviews() {
      try {
        const { results } = await fetchReviews(id);
        setReviews(results);
      } catch {}
    }

    getReviews();
  }, [id]);
  return (
    <div>
      {reviews ? (
        reviews.map(({ author, id, content }) => (
          <div key={id}>
            <p>Aithor: {author}</p>
            <p>{content}</p>
          </div>
        ))
      ) : (
        <p>We don`t have any reviews yet</p>
      )}
    </div>
  );
};
