const { check } = require("express-validator");

exports.createCartValiation = [
  check("item").not().isEmpty().withMessage("Itme not be null"),
  check("user").not().isEmpty().withMessage("User not be null"),
];
