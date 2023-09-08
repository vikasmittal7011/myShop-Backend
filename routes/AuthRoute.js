const express = require("express");
const {
  loginUser,
  createUser,
  resetPasswordRequest,
  resetPassword,
} = require("../controller/Auth");
const { createUserValiation } = require("../validation/Auth");

const router = express.Router();

router
  .post("/", createUserValiation, createUser)
  .post("/login", loginUser)
  .post("/reset-password-request", resetPasswordRequest)
  .post("/reset-password", resetPassword);

module.exports = router;
