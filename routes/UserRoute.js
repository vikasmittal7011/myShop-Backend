const express = require("express");
const { fetchUserData, updateUser } = require("../controller/User");
const userAuth = require("../middleware/userAuth");

const router = express.Router();

router.get("/:id", userAuth, fetchUserData).patch("/:id", updateUser);

module.exports = router;
