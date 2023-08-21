const express = require("express");
const { loginUser, createUser } = require("../controller/Auth");
const { createUserValiation } = require("../validation/Auth");

const router = express.Router();

router.post("/", createUserValiation, createUser).post("/login", loginUser);

module.exports = router;
