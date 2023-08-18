const express = require("express");
const {
  createProduct,
  fetchAllProducts,
  fetchProductById,
} = require("../controller/Product");
const { createProductValiation } = require("../validation/Product");

const router = express.Router();

router.get("/:id", fetchProductById);

router
  .get("/", fetchAllProducts)
  .post("/", createProductValiation, createProduct);

module.exports = router;
