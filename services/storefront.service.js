const APIGateway = require("moleculer-web")

module.exports = {
  // Define service name
  name: "storefront",
  // Load the HTTP server
  mixins: [APIGateway],
  settings: {
    routes: [
      {
        aliases: {
          "GET /"(req, res){
            res.end('Obstladen')
          },
          "GET /products": "products.listProducts",
          "GET /products/:index": "products.getProduct",
          "GET /favicon.ico"() {
            return
          }

        }
      }
    ]
  }
}
