const { Router } = require("express");
const routes = Router();

const ProductsController = require("./controllers/ProductsController");
const SaleOffController = require("./controllers/SaleOffController");
const SearchController = require("./controllers/SearchController");

routes.get("/products", ProductsController.index);
routes.get("/sale-off", SaleOffController.index);
routes.get("/search", SearchController.index);

routes.get("*", (req, res) => {
  return res.status(404).json({ error: "rota nao encontrada" });
});

module.exports = routes;
