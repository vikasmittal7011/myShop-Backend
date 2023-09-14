const express = require("express");
const { postReview } = require("../controller/Review");

const router = express.Router();

router.post("/", postReview);

module.exports = router;
