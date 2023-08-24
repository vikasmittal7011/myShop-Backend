const express = require("express");
const { createCartValiation } = require("../validation/Cart");
const { addToCart, fetchUserItems, updateCart } = require("../controller/Cart");

const router = express.Router();

router
  .get("/:user", fetchUserItems)
  .post("/", createCartValiation, addToCart)
  .patch("/:id", createCartValiation, updateCart);

module.exports = router;
