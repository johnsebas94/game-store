const { request } = require("express");
const Stock = require("../models/stock");
const Product = require("../models/product");

//Product registry
const registerStock = async (req, res) => {
  if (!req.body.stock || !req.body.place)
    return res.status(400).send("Failed: No complete data");

  const existingStock = await Stock.findOne({ place: req.body.place });

  if (existingStock)
    return res
      .status(401)
      .send("Process failed: Product stock has already been created");
  let product = await Product.findOne({ name: "mario" });
  if (!product)
    return res.status(400).send("Process failed: No product has been assigned");

  //Create JSON to send product models
  let stock = new Stock({
    stock: req.body.stock,
    place: req.body.place,
    productId: product._id,
    dbStatus: true,
  });

  //Save in MongoDB
  const result = await stock.save();
  if (!result)
    return res.status(401).send("There was a failed register product");
  return res.status(200).send({ stock });
};

const listStock = async (req, res) => {
  const stock = await Stock.find().populate("productId").exec();
  if (!stock) return res.status(401).send("No Stock");
  return res.status(200).send({ stock });
};
//Export module
module.exports = { registerStock, listStock };
