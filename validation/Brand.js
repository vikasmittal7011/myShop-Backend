const { check } = require("express-validator");

exports.createBrandValiation = [
  check("name")
    .not()
    .isEmpty()
    .isLength({ min: 1, max: 50 })
    .withMessage("Brand name must be between 1 to 50"),
];
