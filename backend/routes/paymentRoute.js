const express = require("express");
const { createOrder } = require("../controllers/paymentController.js"); // Use require to import the createOrder controller

const router = express.Router();

// POST /create-order route to generate a Razorpay order
router.post("/create-order", createOrder);

// Export router using CommonJS
module.exports = router;
