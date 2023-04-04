const db = require("../models");
const Product = db.products;
const test = async (req, res) => {
  const info = {
    title: req.body.title,
    price: req.body.price,
  };
  const product = await Product.create(info);
  res.status(200).send(product);
};

module.exports = { test };
