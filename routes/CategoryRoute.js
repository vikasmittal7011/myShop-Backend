const express = require("express");
const { createCategoryValiation } = require("../validation/Category");
const {
  fetchAllCategories,
  createCategory,
} = require("../controller/Category");
const adminAuth = require("../middleware/adminAuth");

const router = express.Router();

router
  .get("/", fetchAllCategories)
  .post("/", adminAuth, createCategoryValiation, createCategory);

module.exports = router;
