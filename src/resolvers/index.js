const orderResolver = {
  Query: {
    orders: async () => {
      // get orders
    },
    order: async (_, { id }) => {
      console.log(id)
      // get order
    }
  },
  Mutation: {
    createOrder: async (_, { order }) => {
      console.log(order)
      // create order
    }
  }
}

module.exports = [orderResolver]
