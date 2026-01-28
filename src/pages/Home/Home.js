import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../../data/products";
import banner from "../../assets/images/product2.jpeg";
import video from "../../assets/videos/oil-process 2.mp4";
import "./Home.css";
import testimonials from "../../data/testimonials";

const Home = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % products.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>Cold Pressed Edible Oils</h1>
            <p>
              Naturally extracted oils preserving nutrients, aroma, and purity.
            </p>
            <Link to="/products" className="hero-btn">
              Shop Now
            </Link>
          </div>
          <div className="hero-image">
            <img src={banner} alt="Amar Singtel Oils" />
          </div>
        </div>
      </section>

      {/* VIDEO BANNER */}
      <section className="video-banner">
        <video autoPlay muted loop preload="none">
          <source src={video} type="video/mp4" />
        </video>
        <div className="video-overlay">
          <h1>Amar Singtel</h1>
          <p>Pure. Traditional. Trusted Oils</p>
          <Link to="/products" className="video-btn">
            Explore Products
          </Link>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="process">
        <div className="container">
          <h2>Our Traditional Process</h2>

          <div className="process-grid">
            <div className="process-step">
              <span>1</span>
              <h4>Seed Selection</h4>
              <p>Best quality seeds sourced from farmers</p>
            </div>

            <div className="process-step">
              <span>2</span>
              <h4>Cold Pressing</h4>
              <p>Extracted using wooden ghani</p>
            </div>

            <div className="process-step">
              <span>3</span>
              <h4>Natural Filtering</h4>
              <p>No chemicals or heat treatment</p>
            </div>

            <div className="process-step">
              <span>4</span>
              <h4>Safe Packaging</h4>
              <p>Hygienic and sealed for freshness</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CAROUSEL */}
      <section className="carousel">
        <h2>Our Products</h2>
        <div className="carousel-box">
          <button onClick={prev}>❮</button>

          <div className="carousel-card">
            <img src={products[index].image} alt="" />
            <h3>{products[index].name}</h3>
            {/* <p>₹{products[index].price}</p> */}
          </div>

          <button onClick={next}>❯</button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Customers Say</h2>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <div className="testimonial-card" key={item.id}>
                <p className="testimonial-text">“{item.text}”</p>

                <div className="testimonial-stars">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </div>

                <h4>{item.name}</h4>
                <span>{item.city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY COLD PRESSED */}
      <section className="why-cold">
        <div className="container">
          <h2>Why Cold Pressed Oil?</h2>

          <p className="why-intro">
            Cold pressed oils are extracted naturally without heat or chemicals,
            preserving essential nutrients, aroma, and taste.
          </p>

          <div className="why-grid">
            <div className="why-card">
              <h4>🌿 Nutrient Rich</h4>
              <p>Retains natural vitamins, antioxidants and healthy fats.</p>
            </div>

            <div className="why-card">
              <h4>🔥 No Heat Processing</h4>
              <p>Extracted below 40°C using traditional wooden ghani.</p>
            </div>

            <div className="why-card">
              <h4>⚗️ No Chemicals</h4>
              <p>Free from hexane, preservatives, and additives.</p>
            </div>

            <div className="why-card">
              <h4>❤️ Better Digestion</h4>
              <p>Light on stomach and supports heart health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Choose Health, Choose Amar Singtel</h2>
          <Link to="/products" className="cta-btn">
            Buy Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
