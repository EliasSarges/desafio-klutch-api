const { Router } = require("express");
const routes = Router();

const ProductsController = require("./controllers/ProductsController");

routes.get("/products", ProductsController.index);

routes.get("*", (req, res) => {
  res.send("rota nao encontrada");
});

module.exports = routes;
