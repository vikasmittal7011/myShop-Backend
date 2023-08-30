const express = require("express");
const { createCartValiation } = require("../validation/Cart");
const {
  addToCart,
  fetchUserItems,
  updateCart,
  deleteItem,
  deleteAllItem,
} = require("../controller/Cart");
const userAuth = require("../middleware/userAuth");

const router = express.Router();

router
  .get("/", userAuth, fetchUserItems)
  .post("/", userAuth, createCartValiation, addToCart)
  .patch("/:id", userAuth, createCartValiation, updateCart)
  .delete("/clear-cart", userAuth, deleteAllItem)
  .delete("/:id", userAuth, deleteItem);

module.exports = router;
