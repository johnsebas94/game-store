const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.ObjectId, ref: "product" },
  userId: { type: mongoose.Schema.ObjectId, ref: "user" },
  date: { type: Date, default: Date.now },
  price: Number,
  dbStatus: Boolean,
});

const sales = mongoose.model("sales", salesSchema);
module.exports = sales;
