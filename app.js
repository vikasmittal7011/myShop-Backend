const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connection = require("./database");

const PORT = process.env.PORT || 8080;

connection()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());

const app = express();

app.listen(PORT);
