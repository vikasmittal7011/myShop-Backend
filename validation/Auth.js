const { check } = require("express-validator");

exports.createUserValiation = [
  check("name").not().isEmpty().withMessage("Enter name correctly"),
  check("email").normalizeEmail().isEmail().withMessage("Enter valid email"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be above 8 char"),
];
