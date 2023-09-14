const express = require("express");
const {
  postReview,
  fetchReviews,
  updateReview,
} = require("../controller/Review");
const generalAuth = require("../middleware/generalAuth");
const userAuth = require("../middleware/userAuth");

const router = express.Router();

router
  .get("/:product", generalAuth, fetchReviews)
  .post("/", userAuth, postReview)
  .patch("/:id", userAuth, updateReview);

module.exports = router;
