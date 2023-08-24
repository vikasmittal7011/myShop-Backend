const express = require("express");
const { createOrder } = require("../controller/Order");
const { createOrderValiation } = require("../validation/Order");

const router = express.Router();

router.post("/", createOrderValiation, createOrder);

module.exports = router;
