const express = require("express");
const {
  createProduct,
  fetchAllProducts,
  fetchProductById,
  updateProduct,
} = require("../controller/Product");
const { createProductValidation } = require("../validation/Product");

const fileUploading = require("../middleware/fileUploading");

const router = express.Router();

router
  .get("/", fetchAllProducts)
  .get("/:id", fetchProductById)
  .post(
    "/",
    fileUploading.fields([
      { name: "thumbnail", maxCount: 1 },
      { name: "images", maxCount: 4 },
    ]),
    [createProductValidation],
    createProduct
  )
  .patch("/:id", createProductValidation, updateProduct);

module.exports = router;
