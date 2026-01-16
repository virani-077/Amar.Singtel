import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useHistory } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const history = useHistory();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.address) {
      alert("Please fill all fields");
      return;
    }

    const itemsText = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} × ${item.qty} = ₹${item.price * item.qty}`
      )
      .join("\n");

    const message = `
New Order 🛒

Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}

Order Details:
${itemsText}

Total Amount: ₹${total}

Please confirm availability.
    `;

    const phoneNumber = "917623916751";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    // ✅ clear cart
    clearCart();

    // 3️⃣ Redirect AFTER WhatsApp opens
    history.push("/thank-you");
  };

  return (
    <div className="container checkout">
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Mobile Number"
          value={form.phone}
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
        />
        <h3>Total: ₹{total}</h3>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
