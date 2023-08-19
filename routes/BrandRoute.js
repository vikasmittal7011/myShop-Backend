const express = require("express");
const { createBrandValiation } = require("../validation/Brand");
const { fetchAllBrands, createBrand } = require("../controller/Brand");

const router = express.Router();

router.get("/", fetchAllBrands).post("/", createBrandValiation, createBrand);

module.exports = router;
