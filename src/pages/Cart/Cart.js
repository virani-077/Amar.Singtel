import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeItem } =
    useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container cart">
      <h2>Your Cart</h2>

      {cart.length === 0 && <p className="empty">Cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-info">
            <h4>{item.name}</h4>
            <p className="price">₹{item.price}</p>
          </div>

          <div className="qty">
            <button
              onClick={() => decreaseQty(item.id)}
              disabled={item.qty === 1}
              className={item.qty === 1 ? "disabled" : ""}
            >
              -
            </button>
            <span>{item.qty}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <div className="cart-total">₹{item.price * item.qty}</div>

          <button className="remove" onClick={() => removeItem(item.id)}>
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ₹{total}</h3>

          <Link to="/checkout" className="checkout-btn">
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
