const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.ObjectId, ref: "product" },
  stock: Number,
  place: String,
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const stock = mongoose.model("stock", stockSchema);
module.exports = stock;
