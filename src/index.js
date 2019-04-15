const express = require('express')
const path = require('path')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs } = require('./schema')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')

const port = process.env.PORT || 4000

const resolvers = {
    Query,
    Mutation
}
// TODO: Add error handlers
const server = new ApolloServer({ typeDefs, resolvers })
const app = express()
app.use(express.static(path.join(__dirname, '../client/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})
server.applyMiddleware({ app })
app.listen(port, () =>
    console.log(
        `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    )
)
