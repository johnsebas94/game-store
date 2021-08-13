const mongoose = require("mongoose");

const dbConnectionGameStore = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_GAME_STORE, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with MongoDB: It's OK");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
    throw new Error("Error conncting to MongoDB, something is wrong");
  }
};

module.exports = { dbConnectionGameStore };
