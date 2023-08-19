const express = require("express");
const { createCategoryValiation } = require("../validation/Category");
const {
  fetchAllCategories,
  createCategory,
} = require("../controller/Category");

const router = express.Router();

router
  .get("/", fetchAllCategories)
  .post("/", createCategoryValiation, createCategory);

module.exports = router;
