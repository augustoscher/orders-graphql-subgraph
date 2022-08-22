const { v4: uuidv4 } = require('uuid')

const orders = []

const orderResolver = {
  Order: {
    __resolveReference: (reference) => {
      return orders.find((order) => order.id === reference.id)
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
