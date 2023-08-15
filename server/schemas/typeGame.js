const { gql } = require('apollo-server-express');

const typeGame = gql`
type Game {
    gameId: ID
    description: String
    title: String
    image: String
    link: String
}

input gameInput {
    description: String
    title: String
    image: String
    metaCriticScore: Integer
    userScore: Integer
    link: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

type Mutation {
    login(email:String!, password: String!): Auth
    addGame(gameInput: String!): Game
    saveGame(gameData: gameInput!): User
    removegame(gameId: ID!): User
}
`;