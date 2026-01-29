import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import logo from "../../assets/images/Final Logo.svg";
import "./Header.css";

const Header = () => {
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="container header-inner" ref={menuRef}>
        {/* Logo + Brand */}
        <Link to="/" className="logo">
          <img src={logo} alt="Amar Singtel" />
          <span className="brand-name">Amar Singtel</span>
        </Link>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            Cart <span className="cart-count">{cart.length}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
