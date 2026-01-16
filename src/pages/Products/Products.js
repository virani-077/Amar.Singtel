import React from "react";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Products.css";

const Products = () => (
  <div className="container products">
    {products.map(p => (
      <ProductCard key={p.id} product={p} />
    ))}
  </div>
);

export default Products;