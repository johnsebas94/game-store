const { request } = require("express");
const Product = require("../models/product");


//Product registry
const registerProduct = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.price ||
    !req.body.code ||
    !req.body.description ||
    ! req.body.stock
  )
    return res.status(400).send("Failed: No complete data");

  const existingProduct = await Product.findOne({ name: req.body.name });

  if (existingProduct)
    return res
      .status(401)
      .send("Process failed: role has already been created");
     

  //Create JSON to send product models
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    code: req.body.code,
    description: req.body.description,
    stock: req.body.stock,
  });

  //Save in MongoDB
  const result = await product.save();
  if (!result)
    return res.status(401).send("There was a failed register product");
  return res.status(200).send({ product });
};

const listProduct = async (req, res) => {
  const product = await Product.find();
  if (!product) return res.status(401).send("No Product");
  return res.status(200).send({ product });
};
//Export module
module.exports = { registerProduct, listProduct };
