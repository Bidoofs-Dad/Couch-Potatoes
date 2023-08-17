import React from 'react';

const reviewList = ({ review = [] }) => {
    if (!reviews.length) {
        return <h3>No Reviews Yet!</h3>;
    }

    return (
        <>
            <h3
                className="p-5 display-inline-block"
                style={{ borderBottom: '1px dotted #1a1a1a' }}
            >
                Reviews
            </h3>
            <div className="flex-row my-4">
                {reviews &&
                comments.map((comment) =>(
                    <div key={review.id} className="col-12 mb-3 pb-3">
                        <div className="p-3 bg-dark text-light">
                            <h5 className="card-header">
                                {review.reviewAuthor} reviewed{' '}
                                <span style={{ fontSize: '1.0rem' }}>
                                on {review.createdAt}
                                </span>
                            </h5>
                            <p className="card-body">{review.reviewText}</p>
                        </div>
                    </div>
                ))}                
            </div>
        </>
    );
};

export default ReviewList;