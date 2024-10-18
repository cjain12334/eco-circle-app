import React, { useState } from "react";
import axios from "axios";

const Payment = () => {
  const [details, setDetails] = useState({
    name: "",
    country: "India",
    state: "",
    zip: "",
    paymentMethod: "CreditCard",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const loadRazorpay = async () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  };

  const displayRazorpay = async () => {
    await loadRazorpay();

    const result = await axios.post("/create-order", {
      amount: 500, // for example, Rs. 500
    });

    const { id, amount, currency } = result.data;

    const options = {
      key: "YOUR_KEY_ID", // Enter the Key ID generated from Razorpay Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Herbal Shampoo",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: id,
      handler: function (response) {
        alert("Payment Successful");
      },
      prefill: {
        name: details.name,
        email: "example@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
      <h2>Checkout</h2>
      <div>
        <label>First and last name</label>
        <input
          type="text"
          name="name"
          value={details.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Country</label>
        <input
          type="text"
          name="country"
          value={details.country}
          onChange={handleChange}
          disabled
        />
      </div>
      <div>
        <label>State</label>
        <input
          type="text"
          name="state"
          value={details.state}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Zip Code</label>
        <input
          type="text"
          name="zip"
          value={details.zip}
          onChange={handleChange}
        />
      </div>

      {/* Payment Method */}
      <div>
        <h4>Payment Method</h4>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="CreditCard"
            checked={details.paymentMethod === "CreditCard"}
            onChange={handleChange}
          />{" "}
          Credit Card
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="UPI"
            checked={details.paymentMethod === "UPI"}
            onChange={handleChange}
          />{" "}
          UPI
        </label>
      </div>

      {/* If credit card is selected, show more fields */}
      {details.paymentMethod === "CreditCard" && (
        <div>
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={details.cardNumber}
            onChange={handleChange}
          />
          <label>Expiration Date</label>
          <input
            type="text"
            name="expiryDate"
            value={details.expiryDate}
            onChange={handleChange}
          />
          <label>CVV</label>
          <input
            type="text"
            name="cvv"
            value={details.cvv}
            onChange={handleChange}
          />
        </div>
      )}

      <button onClick={displayRazorpay} style={{ padding: "10px", backgroundColor: "green", color: "white", border: "none", borderRadius: "5px" }}>
        Pay with Razorpay
      </button>
    </div>
  );
};

export default Payment;
