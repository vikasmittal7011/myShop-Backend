const { check } = require("express-validator");

exports.createOrderValiation = [
  check("items").not().isEmpty().withMessage("Itmes not be null"),
  check("totalItems").not().isEmpty().withMessage("totalItems not be null"),
  check("totalPrice").not().isEmpty().withMessage("totalPrice not be null"),
  check("address").not().isEmpty().withMessage("address not be null"),
  check("paymentMethod")
    .not()
    .isEmpty()
    .withMessage("paymentMethod not be null"),
  check("status").not().isEmpty().withMessage("status not be null"),
];
