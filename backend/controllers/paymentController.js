const Razorpay = require("razorpay");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,       // Load from environment variables
  key_secret: process.env.RAZORPAY_KEY_SECRET // Load from environment variables
});

// Create order function
const createOrder = async (req, res) => {
  try {
    const amount = parseInt(req.body.amount, 10) * 100; // Convert to paise and ensure it's a valid number

    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    const options = {
      amount: amount, // Amount in the smallest currency unit
      currency: "INR",
      receipt: `receipt_order_${Date.now()}`, // Dynamic receipt ID
    };

    const response = await razorpay.orders.create(options);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error); // Server-side logging
    res.status(500).json({
      error: "Error creating Razorpay order",
      details: error.message,
    });
  }
};

// Export createOrder function like signup and login
module.exports = {
  createOrder,
};
