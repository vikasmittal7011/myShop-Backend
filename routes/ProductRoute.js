const express = require("express");
const { createProduct } = require("../controller/Product");
const { createProductValiation } = require("../validation/Product");

const router = express.Router();

router.post("/create-product", createProductValiation, createProduct);

module.exports = router;
