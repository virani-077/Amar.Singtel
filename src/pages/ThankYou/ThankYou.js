import React from "react";
import { Link } from "react-router-dom";
import "./ThankYou.css";

const ThankYou = () => {
  return (
    <div className="thankyou">
      <div className="thankyou-card">
        <h1>Thank You! 🎉</h1>
        <p>Your order has been placed successfully.</p>
        <p>We will contact you shortly on WhatsApp.</p>

        <Link to="/" className="btn-home">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;