const orderResolver = {
  Query: {
    orders: async () => {
      // get orders
    },
    order: async (_, { id }) => {
      // get order
    }
  },
  Mutation: {
    createOrder: async (_, { order }) => {
      // create order
    }
  }
}

module.exports = orderResolver
