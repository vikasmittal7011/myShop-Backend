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
const Auth = require("./routes/AuthRoute");
const User = require("./routes/UserRoute");

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
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH");
  next();
});

app.use("/api/product", Product);
app.use("/api/brand", Brand);
app.use("/api/category", Category);
app.use("/api/auth", Auth);
app.use("/api/user", User);

app.use((req, res, next) => {
  next(new HttpError("Not route found", 404));
});

app.use((error, req, res, next) => {
  if (req.files) {
    fs.unlink(req.files.thumbnail[0].path, (err) => {});
    if (req.files.image1) {
      fs.unlink(req.files.image1[0].path, (err) => {});
    }
    if (req.files.image2) {
      fs.unlink(req.files.image2[0].path, (err) => {});
    }
    if (req.files.image3) {
      fs.unlink(req.files.image3[0].path, (err) => {});
    }
    if (req.files.image4) {
      fs.unlink(req.files.image4[0].path, (err) => {});
    }
  }
  if (res.heardersSent) {
    return next(error);
  }
  res
    .status(error.errorCode || 500)
    .json({ message: error.message || "Unknow error accour" || error.message });
});

app.listen(PORT);
