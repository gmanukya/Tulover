import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Different port for heroku
const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
    cache: new InMemoryCache()
})

export default client
