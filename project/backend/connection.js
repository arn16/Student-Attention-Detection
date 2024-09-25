const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve("./env/.env"),
});

const connection = async () => {
  try {
    const status = await mongoose.connect(process.env.CONNECTION_URI || "");
  } catch (err) {
    throw err;
  }
};

module.exports = {
  connection,
};
