const express = require("express");
const {
  createOrder,
  fetchUserOrders,
  fetchOrders,
  updateOrders,
} = require("../controller/Order");
const { createOrderValiation } = require("../validation/Order");

const router = express.Router();

router
  .get("/", fetchOrders)
  .get("/:user", fetchUserOrders)
  .post("/", createOrderValiation, createOrder)
  .patch("/:id", createOrderValiation, updateOrders);

module.exports = router;
