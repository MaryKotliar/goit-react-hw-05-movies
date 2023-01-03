import { useState, useEffect } from 'react';
import { fetchReviews } from 'api';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { Text, TextReview } from './Reviews.styled';
const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const [loading, setlLoading] = useState(false);
  const [error, setError] = useState('');
  const { id } = useParams();
  useEffect(() => {
    async function getReviews() {
      try {
        setlLoading(true);
        setError('');
        const { results } = await fetchReviews(id);
        setReviews(results);
      } catch (error) {
        setError('This didn`t work. Please try again later.');
      } finally {
        setlLoading(false);
      }
    }

    getReviews();
  }, [id]);
  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);
  return (
    <div>
      {loading && <Loader />}

      {reviews.length !== 0 ? (
        reviews.map(({ author, id, content }) => (
          <div key={id}>
            <Text>Author: {author}</Text>
            <TextReview>{content}</TextReview>
          </div>
        ))
      ) : (
        <p>We don`t have any reviews yet</p>
      )}
      <Toaster position="top-right" />
    </div>
  );
};
export default Reviews;
