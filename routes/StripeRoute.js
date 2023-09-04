const express = require("express");
const { webhook, createPymentIntent } = require("../controller/Stripe");

const router = express.Router();

router
  .post("/webhook", express.raw({ type: "application/json" }), webhook)
  .post("/create-payment-intent", createPymentIntent);

module.exports = router;
