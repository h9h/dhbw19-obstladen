const obst = [
  { name: "Apples", price: 5 },
  { name: "Oranges", price: 3 },
  { name: "Bananas", price: 2 },
  { name: "Papaya", price: 10 },
]

module.exports = {
  // Define service name
  name: "products",

  actions: {
    // Define service action that returns the available products
    listProducts(ctx) {
      return obst;
    },
    getProduct(ctx) {
        return obst[ctx.params.index]
    }
  }
}

