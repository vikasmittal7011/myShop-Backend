const mongoose = require("mongoose");

const connection = () => {
  return mongoose.connect(process.env.MONGODB_CONNECTION_URI);
};

module.exports = connection;
