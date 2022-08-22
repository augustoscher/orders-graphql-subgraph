const orders = []

const orderResolver = {
  Order: {
    __resolveReference: (reference) => {
      return orders.find((order) => order.id === reference.id)
    }
  },
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
