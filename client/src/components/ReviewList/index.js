import React from 'react';
import { Link } from 'react-router-dom';
import '../components.css'

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
      {/* {mappedReviews()} */}
      {reviews &&
        reviews.map((review) => (
          <div key={review._id} className="temp">
            <div className="temp">
              <div className='reviewCon'>
                <div className="temp">
                <Link to={`/game/${review.gameId}`} className='noDecor'><p className='gameName'>{review.gameName}</p></Link>
                </div>
                <div className="reviewText">
                  <p>{review.reviewText}</p>
                </div>
                {showUsername ? (
                <Link
                  className="temp"
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
                  {review.reviewUser} left this review on {review.dateCreated}
                  </span>
                  
                </>
              )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default ReviewList;