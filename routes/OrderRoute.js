const express = require("express");
const {
  createOrder,
  fetchUserOrders,
  fetchOrders,
} = require("../controller/Order");
const { createOrderValiation } = require("../validation/Order");

const router = express.Router();

router
  .get("/", fetchOrders)
  .get("/:user", fetchUserOrders)
  .post("/", createOrderValiation, createOrder);

module.exports = router;
