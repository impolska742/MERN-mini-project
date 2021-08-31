const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "../../.env" });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, () => {
      console.log("MongoDB connected Successfully!!");
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
