const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { id } = req.body;

    const ngo = await connection("ngos")
      .where("id", id)
      .select("name")
      .first();

    if (!ngo) {
      return res.status(400).json({ error: "NGO not found" });
    }

    return res.json(ngo);
  }
};
