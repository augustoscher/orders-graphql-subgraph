const { gql } = require('apollo-server')

const schema = gql`
  extend schema
    @link(
      url: "https://specs.apollo.dev/federation/v2.0"
      import: ["@key", "@shareable"]
    )

  type Query {
    orders: [Order]
    order(id: ID!): Order
  }

  type Mutation {
    createOrder(order: OrderInput): Order
  }

  type Order @key(fields: "id") {
    id: ID!
    customerId: ID!
    storeName: String
    total: Number!
    items: [OrdemItem]
  }

  type OrderItem {
    id: ID!
    productId: ID!
    amount: Number!
    price: Number!
    total: Number!
  }

  input OrderInput {
    customerId: ID!
    storeName: String
    total: Number!
    items: [{
      productId: ID!
      amount: Number!
      price: Number!
      total: Number!
    }]
  }
`

module.exports = [schema]
