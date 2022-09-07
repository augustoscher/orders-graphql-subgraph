const { ApolloServer } = require('apollo-server')
const { buildSubgraphSchema } = require('@apollo/subgraph')

const typeDefs = require('./types')
const resolvers = require('./resolvers')

const port = process.env.PORT || 4001

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers })
})

server
  .listen({ port })
  .then(({ url }) => {
    console.log(`Orders subgraph ready at ${url}`)
  })
  .catch((err) => {
    console.error(err)
  })
