const { v4: uuidv4 } = require('uuid')

const orders = []

const orderResolver = {
  Order: {},
  OrderItem: {
    product(orderItem) {
      return {
        // Allow data fetch from product subgraph.
        // This will trigger __resolveReference resolver in Product type in products subgraph
        __typename: 'Product',
        id: orderItem.productId
      }
    }
  },
  Query: {
    orders: () => {
      return orders
    },
    order: (_, { id }) => {
      return orders.find((order) => order.id === id)
    }
  },
  Mutation: {
    createOrder: (_, { order }) => {
      const newOrder = {
        ...order,
        id: uuidv4()
      }

      orders.push(newOrder)
      return newOrder
    }
  }
}

module.exports = orderResolver
