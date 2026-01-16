import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "917623916751"; // <-- CHANGE to your WhatsApp number
  const message = "Hello Amar Singtel, I would like to place an order.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      💬
    </a>
  );
};

export default WhatsAppButton;
