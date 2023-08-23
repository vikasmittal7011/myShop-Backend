const { body } = require("express-validator");

exports.createProductValidation = [
  body("title")
    .not()
    .isEmpty()
    .isLength({ min: 2, max: 50 })
    .withMessage("Title must be between 2 to 50"),
  body("description")
    .not()
    .isEmpty()
    .isLength({ min: 10, max: 2000 })
    .withMessage("Description must be between 2 to 50"),
  body("price").not().isEmpty().withMessage("Price not be null"),
  body("discountPercentage")
    .not()
    .isEmpty()
    .isLength({ min: 0, max: 90 })
    .withMessage("Discount Percentage not be nully"),
  body("stock")
    .not()
    .isEmpty()
    .isLength({ min: 1 })
    .withMessage("Stock not be null"),
  body("brand").not().isEmpty().withMessage("Brand not be null"),
  body("category").not().isEmpty().withMessage("Category not be null"),
];
