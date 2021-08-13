const express = require ("express");
const router = express.Router();
const user = require("../controllers/user");

//http://localhost:3003/api/GameStore/register-user
router.post("/register-user", user.registerUser);
//http://localhost:3003/api/GameStore/list-user
router.get("/list-user/:name?", user.listUser);

module.exports = router;