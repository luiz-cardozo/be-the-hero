const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async create(req, res) {
    const { name, email, whatsapp, city, state } = req.body;
    const id = crypto.randomBytes(4).toString("HEX");

    await connection("ngos").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      state
    });
    return res.json({ id });
  },

  async index(req, res) {
    const ngos = await connection("ngos").select("*");
    return res.json(ngos);
  }
};
