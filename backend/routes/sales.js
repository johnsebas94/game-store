const express = require("express");
const router = express.Router();
const sales = require("../controllers/sales");

//http://localhost:3003/api/GameStore/register-sales
router.post("/register-sales", sales.registerSales);
//http://localhost:3003/api/GameStore/list-sales
router.get("/list-sales", sales.listSales)

module.exports = router;