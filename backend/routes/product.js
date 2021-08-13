const express = require("express");
const router = express.Router();
const product = require("../controllers/product");

//http://localhost:3003/api/GameStore/register-product
router.post("/register-product", product.registerProduct);
//http://localhost:3003/api/GameStore/list-product
router.get("/list-product", product.listProduct)

module.exports = router;