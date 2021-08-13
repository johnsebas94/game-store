const Sales = require("../models/sales");
const User = require("../models/user");
const Product = require("../models/product");

const registerSales = async (req, res) => {
  if (!req.body.price)
    return res.status(400).send("Process failed: Incomplete data,give a price");

  let user = await User.findOne({ name: "Nicolas Pintor" });

  if (!user)
    return res.status(400).send("Process failed: No user was assigned*");

  let product = await Product.findOne({ name: "Halo" });

  if (!product)
    return res.status(400).send("Process failed: No product was assigned");

  let sales = new Sales({
    price: req.body.price,
    userId: user._id,
    productId: product._id,
    dbStatus: true,
  });

  let result = await sales.save();
  if (!result) return res.status(401).send("There was a failed register sale");
  return res.status(200).send({ sales });
};

//Check Sales List
const listSales = async (req, res) => {
  let sales = await Sales.find()
    .populate("userId")
    .populate("productId")
    .exec();
  if (!sales || sales.length === 0) return res.status(401).send("No sale");
  return res.status(200).send({ sales });
};
module.exports = { registerSales, listSales };
