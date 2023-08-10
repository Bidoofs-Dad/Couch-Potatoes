const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Review {
   review: String
   reviewUser: string
   dateCreated: string
   comments: [comment]!

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
    users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addReview(thoughtReview: String!, reviewAuthor: String!): Thought
    addComment(
      thoughtId: ID!
      commentText: String!
      commentAuthor: String!
    ): Review
    removeReview(reviewId: ID!): Thought
    removeComment(commentId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
