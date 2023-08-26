const express = require("express");
const { createBrandValiation } = require("../validation/Brand");
const { fetchAllBrands, createBrand } = require("../controller/Brand");
const adminAuth = require("../middleware/adminAuth");

const router = express.Router();

router
  .get("/", fetchAllBrands)
  .post("/", adminAuth, createBrandValiation, createBrand);

module.exports = router;
