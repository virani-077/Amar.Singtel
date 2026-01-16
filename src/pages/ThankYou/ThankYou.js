import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./ThankYou.css";

const ThankYou = () => {
  return (
    <div className="container thank-you">
      <h1>Thank You! 🎉</h1>
      <p>Your order has been placed successfully.</p>
      <p>We will contact you shortly.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ThankYou;