const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Review {
   username: String
   dateCreated: Date
  }

  type Auth {
    token: ID!
   user: User
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    removeUser(userId: ID!): User
  }
`;

module.exports = typeDefs;
