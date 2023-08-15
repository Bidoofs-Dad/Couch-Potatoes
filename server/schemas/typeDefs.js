const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    reviews: [Review]!
  }

  type Review {
    _id: ID
   reviewText: String
   reviewUser: String
   gameId: String
   gameName: String
   dateCreated: String
   comments: [Comment]!

  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String 
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    reviews(username: String): [Review]
    review(reviewId: ID!): Review
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addReview(reviewText: String!, gameId: String!, gameName: String!): Review
    addComment(
      reviewId: ID!
      commentText: String!
    ): Review
    removeReview(reviewId: ID!): Review
    removeComment(reviewId: ID!, commentId: ID!): Review
  }
`;

module.exports = typeDefs;
