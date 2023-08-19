const { check } = require("express-validator");

exports.createCategoryValiation = [
  check("name")
    .not()
    .isEmpty()
    .isLength({ min: 1, max: 50 })
    .withMessage("Category name must be between 1 to 50"),
];
