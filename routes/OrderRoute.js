const express = require("express");
const {
  createOrder,
  fetchUserOrders,
  fetchOrders,
  updateOrders,
} = require("../controller/Order");
const { createOrderValiation } = require("../validation/Order");
const userAuth = require("../middleware/userAuth");
const adminAuth = require("../middleware/adminAuth");

const router = express.Router();

router
  .get("/", adminAuth, fetchOrders)
  .get("/", fetchUserOrders)
  .post("/", userAuth, createOrderValiation, createOrder)
  .patch("/:id", adminAuth, createOrderValiation, updateOrders);

module.exports = router;
