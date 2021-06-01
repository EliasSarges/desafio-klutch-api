const db = require("../database/connection");

module.exports = {
  async index(req, res) {
    const { name } = req.query;

    const saleOffData = await db("saleOff").where(
      "description",
      "like",
      `%${name}%`
    );

    const productsData = await db("products").where(
      "description",
      "like",
      `%${name}%`
    );

    const data = [...saleOffData, ...productsData];

    return res.status(200).json(data);
  },
};
