import React from 'react';
import { Link } from 'react-router-dom';
import '../components.css'

const ReviewList = ({
  reviews,
  title,
  showTitle = true,
  showUsername = true,
}) => {

// const mappedReviews = () => {
//   reviews.map((review) => {
//   console.log(review);
//   return (
//     <div key={review._id} className="temp">
            
//             <h4 className="temp">
//               {showUsername ? (
//                 <Link
//                   className="temp"
//                   to={`/profiles/${review.reviewUser}`}
//                 >
//                   {review.reviewUser} <br />
//                   <span style={{ fontSize: '1rem' }}>
//                     left this review on {review.dateCreated}
//                   </span>
//                 </Link>
//               ) : (
//                 <>
//                   <span style={{ fontSize: '1rem' }}>
//                     You left this review on {review.dateCreated}
//                   </span>
//                 </>
//               )}
//             </h4>
//             <div className="temp">
//               <p>{review.reviewText}</p>
//             </div>

//           </div>
//   )
// })
// }


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
            <h4 className="temp">

              <div className='reviewCon'>
                <div className="titleName">
                <Link to={`/game/${review.gameId}`} className='noDecor'><p className='gameName'>{review.gameName}</p></Link>
                </div>
                
                <div className="reviewText">
                  <p>{review.reviewText}</p>
                </div>
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
                    You left this review on {review.dateCreated}
                  </span>
                  
                </>
              )}
            </h4>
            <br></br>
            

          </div>
        ))}
    </div>
  );
};
export default ReviewList;