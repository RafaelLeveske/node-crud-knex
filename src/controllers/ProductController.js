const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const products = await connection('products').select('*');

    return res.json(products);
  },

  async store(req, res) {
    const {
      title,
      description
    } = req.body;

    const id = crypto.randomBytes(4).toString('hex');

    const products = {
      id,
      title,
      description
    }

    await connection('products').insert(products);

    return res.json(products);
  },

  async update(req, res) {
    const { id } = req.params;
    
    const {
      title,
      description
    } = req.body;

    const product = {
      title,
      description
    };

    await connection('products')
      .where('id', id)
      .update(product);

    return res.json(product);
  },

  async destroy(req, res) {
    const { id } = req.params;

    await connection('products')
      .where('id', id)
      .delete();

      return res.status(204).send();
  }
};