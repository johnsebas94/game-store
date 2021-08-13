//Calls modules
const express = require("express");
const cors = require("cors");
const { dbConnectionGameStore } = require("./db/db_GameStore")
const Product = require("./routes/product")
const User = require("./routes/user")
const Sales = require("./routes/sales")
const Stock = require("./routes/stock")
require("dotenv").config();

//Create aplication
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/GameStore", Product)
app.use("/api/GameStore", User)
app.use("/api/GameStore", Sales)
app.use("/api/GameStore", Stock)

//Conenection withthe PORT
app.listen(process.env.PORT, () =>
console.log("Backend server is running OK on port: ", process.env.PORT)
);

//Connect with DataBase
dbConnectionGameStore();