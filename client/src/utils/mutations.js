import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_REVIEW = gql`
mutation addReview($reviewText: String!) {
  addReview(reviewText: $reviewText) {
    _id
    reviewText
    reviewUser
    dateCreated
    comments {
      commentText
    }
  }
}
`;

export const ADD_COMMENT = gql`
mutation addComment($reviewId: ID!, $commentText: String!) {
  addComment(reviewId: $reviewId, commentText: $commentText) {
    _id
    reviewText
    reviewUser
    dateCreated
    comments {
      commentText
      createdAt
    }
  }
}
`;
