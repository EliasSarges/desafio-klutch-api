const { Router } = require("express");
const routes = Router();

const ProductsController = require("./controllers/ProductsController");
const SaleOffController = require("./controllers/SaleOffController");

routes.get("/products", ProductsController.index);
routes.get("/sale-off", SaleOffController.index);

routes.get("*", (req, res) => {
  res.send("rota nao encontrada");
});

module.exports = routes;
