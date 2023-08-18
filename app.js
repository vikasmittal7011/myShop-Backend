const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connection = require("./database");
const app = express();

const Product = require("./routes/ProductRoute");

const PORT = process.env.PORT || 8080;

connection()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json())

app.use("/api/product", Product);

app.listen(PORT);
