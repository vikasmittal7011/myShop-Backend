const express = require("express");
const {
  createProduct,
  fetchAllProducts,
  fetchProductById,
  updateProduct,
} = require("../controller/Product");
const { createProductValidation } = require("../validation/Product");

const fileUploading = require("../middleware/fileUploading");
const adminAuth = require("../middleware/adminAuth");

const router = express.Router();

router
  .get("/", fetchAllProducts)
  .get("/:id", fetchProductById)
  .post(
    "/",
    adminAuth,
    fileUploading.fields([
      { name: "thumbnail", maxCount: 1 },
      { name: "image1", maxCount: 1 },
      { name: "image2", maxCount: 1 },
      { name: "image3", maxCount: 1 },
      { name: "image4", maxCount: 1 },
    ]),
    [createProductValidation],
    createProduct
  )
  .patch("/:id", adminAuth, createProductValidation, updateProduct);

module.exports = router;
