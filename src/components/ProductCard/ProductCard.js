import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { cart, addToCart } = useContext(CartContext);

  const exists = cart.find((item) => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} loading="lazy" />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button disabled={exists} onClick={() => addToCart(product)}>
        {exists ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
