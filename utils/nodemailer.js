const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "vikasaggrawal700@gmail.com",
    pass: process.env.MAIL_PASS,
  },
});

module.exports = transporter;
