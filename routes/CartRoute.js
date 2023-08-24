const express = require("express");
const { createCartValiation } = require("../validation/Cart");
const {
  addToCart,
  fetchUserItems,
  updateCart,
  deleteItem,
  deleteAllItem,
} = require("../controller/Cart");

const router = express.Router();

router
  .get("/:user", fetchUserItems)
  .post("/", createCartValiation, addToCart)
  .patch("/:id", createCartValiation, updateCart)
  .delete("/:id", deleteItem)
  .delete("/clear-cart/:user", deleteAllItem);

module.exports = router;
