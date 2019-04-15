const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schema')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')

const resolvers = {
    Query,
    Mutation
}

// TODO: Add error handlers
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`Server running on ${url}`)
})
