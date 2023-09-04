const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const connection = require("./database");
const app = express();

const Product = require("./routes/ProductRoute");
const Category = require("./routes/CategoryRoute");
const Brand = require("./routes/BrandRoute");
const Auth = require("./routes/AuthRoute");
const User = require("./routes/UserRoute");
const Cart = require("./routes/CartRoute");
const Order = require("./routes/OrderRoute");

const { Orders } = require("./models/Orders");

const PORT = process.env.PORT || 8080;

connection()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.post(
  "/api/webhook",
  express.raw({ type: "application/json" }),
  async (request, response) => {
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntentSucceeded = event.data.object;
        const id = paymentIntentSucceeded.metadata.orderId;
        console.log(paymentIntentSucceeded.metadata.orderId);

        const order = await Orders.findById(
          paymentIntentSucceeded.metadata.orderId
        );
        order.paymentStatus = "Receive";
        await order.save();

        // Then define and call a function to handle the event payment_intent.succeeded
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);

app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
app.use(express.json());
app.use("/api/upload", express.static(path.join("upload")));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH");
  next();
});

app.use("/api/product", Product);
app.use("/api/brand", Brand);
app.use("/api/category", Category);
app.use("/api/auth", Auth);
app.use("/api/user", User);
app.use("/api/cart", Cart);
app.use("/api/order", Order);

app.post("/api/create-payment-intent", async (req, res) => {
  const { items, orderId } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: items * 100,
      currency: "inr",
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: { orderId },
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET;

app.use((req, res, next) => {
  next(new HttpError("Not route found", 404));
});

app.use((error, req, res, next) => {
  if (req.files) {
    fs.unlink(req.files.thumbnail[0].path, (err) => {});
    if (req.files.image1) {
      fs.unlink(req.files.image1[0].path, (err) => {});
    }
    if (req.files.image2) {
      fs.unlink(req.files.image2[0].path, (err) => {});
    }
    if (req.files.image3) {
      fs.unlink(req.files.image3[0].path, (err) => {});
    }
    if (req.files.image4) {
      fs.unlink(req.files.image4[0].path, (err) => {});
    }
  }
  if (res.heardersSent) {
    return next(error);
  }
  res
    .status(error.errorCode || 500)
    .json({ message: error.message || "Unknow error accour" || error.message });
});

app.listen(PORT);
