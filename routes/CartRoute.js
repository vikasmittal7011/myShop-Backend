const express = require("express");
const { createCartValiation } = require("../validation/Cart");
const { addToCart, fetchUserItems } = require("../controller/Cart");

const router = express.Router();

router.get("/:user", fetchUserItems).post("/", createCartValiation, addToCart);

module.exports = router;
