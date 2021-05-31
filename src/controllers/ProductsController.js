const db = require("../database/connection");

module.exports = {
  async index(req, res) {
    const data = await db("products");

    return res.status(200).json(data);
  },
};
