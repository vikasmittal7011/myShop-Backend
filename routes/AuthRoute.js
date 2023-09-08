const express = require("express");
const {
  loginUser,
  createUser,
  resetPasswordRequest,
} = require("../controller/Auth");
const { createUserValiation } = require("../validation/Auth");

const router = express.Router();

router
  .post("/", createUserValiation, createUser)
  .post("/login", loginUser)
  .post("/reset-password-request", resetPasswordRequest);

module.exports = router;
