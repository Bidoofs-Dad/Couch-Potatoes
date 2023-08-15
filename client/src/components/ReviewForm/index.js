import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_REVIEW } from '../../utils/mutations';
import { QUERY_REVIEWS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const ReviewForm = ({ gameId, gameName }) => {
  const [reviewText, setReviewText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addReview, { error }] = useMutation(ADD_REVIEW, {
    update(cache, { data: { addReview } }) {
      try {
        const { reviews } = cache.readQuery({ query: QUERY_REVIEWS }) || { reviews: [] };

        cache.writeQuery({
          query: QUERY_REVIEWS,
          data: { reviews: [addReview, ...reviews] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME }) || { me: { reviews: [] } };
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, reviews: [...me.reviews, addReview] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log('Review Text:', reviewText);
      console.log('Game ID:', gameId);
      console.log('Game Name:', gameName);

      const { data } = await addReview({
        variables: {
          reviewText,
          reviewUser: Auth.getProfile().data.username,
          gameId,
          gameName,
        },
      });

      setReviewText('');
      alert('Review Submitted!')
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'reviewText' && value.length <= 280) {
      setReviewText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>Got something to say?</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`${characterCount === 280 || error ? 'text-danger' : ''
              }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            onSubmit={handleFormSubmit}
          >
            <div>
              <textarea
                name="reviewText"
                placeholder="Whatcha think about this game??"
                value={reviewText}
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              <button type="submit">
                Add Review
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to write a review! Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ReviewForm;
