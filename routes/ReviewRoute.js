const express = require("express");
const { postReview, fetchReviews } = require("../controller/Review");

const router = express.Router();

router.get("/:product", fetchReviews).post("/", postReview);

module.exports = router;
