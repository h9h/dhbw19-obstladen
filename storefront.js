const { ServiceBroker } = require("moleculer");
const APIGateway = require("moleculer-web"); // HTTP/S-Server

// Define nodeID and set the communication bus
const node = new ServiceBroker({
  nodeID: "node-1",
  transporter: "NATS"
});

// Create the "storefront" service
node.createService({
  // Define service name
  name: "storefront",
  // Load the HTTP server
  mixins: [APIGateway],
  settings: {
    routes: [
      {
        aliases: {
          "GET /products": "products.listProducts",
          "GET /products/:index": "products.getProduct"
        }
      }
    ]
  }
});

module.exports = node;
