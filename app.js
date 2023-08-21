const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const connection = require("./database");
const app = express();

const Product = require("./routes/ProductRoute");
const Category = require("./routes/CategoryRoute");
const Brand = require("./routes/BrandRoute");

const PORT = process.env.PORT || 8080;

connection()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
app.use(express.json());
app.use("/upload", express.static(path.join("upload")));

app.use("/api/product", Product);
app.use("/api/brand", Brand);
app.use("/api/category", Category);

app.use((req, res, next) => {
  next(new HttpError("Not route found", 404));
});

app.use((error, req, res, next) => {
  if (req.files) {
    console.log(req.files.images[0].path);
    fs.unlink(req.files.thumbnail[0].path, (err) => {});
    req.files.images.map((image) => {
      fs.unlink(image.path, (err) => {});
    });
  }
  if (res.heardersSent) {
    return next(error);
  }
  res
    .status(error.errorCode || 500)
    .json({ message: error.message || "Unknow error accour" || error.message });
});

app.listen(PORT);
