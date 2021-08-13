const express = require("express");
const router = express.Router();
const stock = require("../controllers/stock");

//http://localhost:3003/api/GameStore/register-stock
router.post("/register-stock", stock.registerStock);
//http://localhost:3003/api/GameStore/list-stock
router.get("/list-stock", stock.listStock)

module.exports = router;