const { check } = require("express-validator");

exports.createProductValiation = [
  check("title")
    .not()
    .isEmpty()
    .isLength({ min: 2, max: 50 })
    .withMessage("Title must be between 2 to 50"),
  check("description")
    .not()
    .isEmpty()
    .isLength({ min: 10, max: 2000 })
    .withMessage("Description must be between 2 to 50"),
  check("price").not().isEmpty().withMessage("Price not be null"),
  check("discountPercentage")
    .not()
    .isEmpty()
    .isLength({ min: 0, max: 90 })
    .withMessage("Discount Percentage not be nully"),
  check("rating")
    .not()
    .isEmpty()
    .isLength({ min: 0, max: 5 })
    .withMessage("Rating must be between 0 to 5"),
  check("stock")
    .not()
    .isEmpty()
    .isLength({ min: 1 })
    .withMessage("Stock not be null"),
  check("brand").not().isEmpty().withMessage("Brand not be null"),
  check("category").not().isEmpty().withMessage("Category not be null"),
  check("thumbnail").not().isEmpty().withMessage("Thumbnail not be null"),
  check("images").isArray(),
];
