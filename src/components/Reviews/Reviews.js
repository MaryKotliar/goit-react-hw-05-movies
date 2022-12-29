import { useState, useEffect } from 'react';
import { fetchReviews } from 'api';
import { useParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import { Text, TextReview } from './Reviews.styled';
export const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const [loading, setlLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function getReviews() {
      try {
        setlLoading(true);
        setError(false);
        const { results } = await fetchReviews(id);
        setReviews(results);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setlLoading(false);
      }
    }

    getReviews();
  }, [id]);
  return (
    <div>
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
