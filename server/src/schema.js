const { gql } = require('apollo-server')

const typeDefs = gql`
    scalar DateTime

    type Query {
        stockholder(id: ID!): Stockholder
        allStockholders(date: DateTime): [Stockholder]
        transactions(stockholderId: ID!): [Transaction]
    }

    type Mutation {
        createTransaction(
            stockholderId: ID
            stockholderName: String!
            amount: Int!
            date: DateTime!
        ): Transaction
    }

    type Stockholder {
        id: ID!
        name: String!
        shares: Int!
    }

    type Transaction {
        id: ID!
        date: DateTime!
        amount: Int!
        stockholder: Stockholder!
    }
`

module.exports = {
    typeDefs
}
