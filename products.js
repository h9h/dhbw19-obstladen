const { ServiceBroker } = require("moleculer");

// Define nodeID and set the communication bus
const node = new ServiceBroker({
  nodeID: "node-2",
  transporter: "NATS"
});

const obst = [
  { name: "Apples", price: 5 },
  { name: "Oranges", price: 3 },
  { name: "Bananas", price: 2 }
]

// Create the "products" service
node.createService({
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
});

module.exports = node;
