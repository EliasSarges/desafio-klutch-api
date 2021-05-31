const db = require("../database/connection");

module.exports = {
  async index(req, res) {
    const data = await db("saleOff").orderBy("date", "asc");
    return res.status(200).json(data);
  },
};
