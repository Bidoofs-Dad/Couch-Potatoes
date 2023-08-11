import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
  users {
    _id
    username
    email
    reviews {
      _id
      reviewText
      reviewUser
      dateCreated
    }
  }
}
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($username: String!) {
  user(username: $username) {
    _id
    username
    email
    reviews {
      _id
      reviewText
      reviewUser
      dateCreated
    }
  }
}
`;

export const QUERY_ME = gql`
  query me {
  me {
    _id
    username
    email
    reviews {
      _id
      reviewText
      reviewUser
      dateCreated
    }
  }
}
`;

export const QUERY_SINGLE_REVIEW = gql`
query singleReview($reviewId: ID!) {
  review(reviewId: $reviewId) {
    _id
    reviewText
    reviewUser
    dateCreated
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
}
`;

export const QUERY_REVIEWS = gql`
query allReviews {
  reviews {
    _id
    reviewText
    reviewUser
    dateCreated
  }
}
`;