import React from 'react';
import { Link } from 'react-router-dom';
const ReviewList = ({
  reviews,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!reviews.length) {
    return <h3>No Reviews Yet</h3>;
  }
  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {reviews &&
        reviews.map((review) => (
          <div key={review._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${review.reviewUser}`}
                >
                  {review.reviewUser} <br />
                  <span style={{ fontSize: '1rem' }}>
                    left this review on {review.dateCreated}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You left this review on {review.dateCreated}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{review.reviewText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/reviews/${review._id}`}
            >
              Whatcha gotta say about that??
            </Link>
          </div>
        ))}
    </div>
  );
};
export default ReviewList;