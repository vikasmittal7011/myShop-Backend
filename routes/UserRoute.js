const express = require("express");
const { fetchUserData, updateUser } = require("../controller/User");
const userAuth = require("../middleware/userAuth");
const generalAuth = require("../middleware/generalAuth");

const router = express.Router();

router.get("/", generalAuth, fetchUserData).patch("/", userAuth, updateUser);

module.exports = router;
