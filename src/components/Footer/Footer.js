import React from "react";
import logo from "../../assets/images/Final Logo.svg";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      {/* BRAND */}
      <div className="footer-brand">
        {/* MAP */}
        <div className="footer-section map">
          <h4>Find Us</h4>

          <iframe
            title="Amar Singtel Location"
            src="https://www.google.com/maps?q=Kathwada%20GIDC%20Ahmedabad&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* SOCIAL ICONS */}
        <div className="socials">
          {/* Phone */}
          <a href="tel:+919913290536" aria-label="Phone" className="icon phone">
            <svg viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.6a2 2 0 0 1-.45 2.11L9 10.91a16 16 0 0 0 4.09 4.09l1.48-1.15a2 2 0 0 1 2.11-.45c.83.28 1.7.48 2.6.6A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/amar_oil/reels/"
            target="_blank"
            rel="noreferrer"
            className="icon instagram"
          >
            <svg viewBox="0 0 24 24">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/people/Amar-Oil/61584916689198/#"
            target="_blank"
            rel="noreferrer"
            className="icon facebook"
          >
            <svg viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.35 3h-1.85v7A10 10 0 0 0 22 12" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="icon youtube"
          >
            <svg viewBox="0 0 24 24">
              <path d="M23 7s-.2-1.6-.8-2.3a3 3 0 0 0-2.1-.8C17.2 3.6 12 3.6 12 3.6h0s-5.2 0-8.1.3a3 3 0 0 0-2.1.8C1.2 5.4 1 7 1 7S.8 8.9.8 10.8v2.4C.8 15.1 1 17 1 17s.2 1.6.8 2.3a3 3 0 0 0 2.1.8c2.9.3 8.1.3 8.1.3s5.2 0 8.1-.3a3 3 0 0 0 2.1-.8c.6-.7.8-2.3.8-2.3s.2-1.9.2-3.8v-2.4C23.2 8.9 23 7 23 7zM9.75 14.6V9.4l4.5 2.6-4.5 2.6z" />
            </svg>
          </a>
        </div>
      </div>

      {/* CONTACT */}
      <address className="footer-section">
        <h4>Contact</h4>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Shop+No.+28+BN+Industrial+Estate+Kathwada+GIDC+Ahmedabad"
          target="_blank"
          rel="noreferrer"
        >
          📍 Shop No. 28, BN Industrial Estate, Rd Number 5, near S P Ring Road,
          Kathwada GIDC, Nikol Chowk, Odhav, Kathwada, Ahmedabad, Gujarat 382415
        </a>

        <a href="tel:+919913290536">📞 +91 99132 90536</a>
        <a href="mailto:amarsingtel@gmail.com">✉️ amarsingtel@gmail.com</a>
      </address>

      {/* LOCATIONS */}
      <div className="footer-section">
        <h4>Factory Locations</h4>
        <p>🏭 Ahmedabad</p>
        <p>🏭 Bhesan</p>
        {/* <p>🏭 Rajkot</p> */}
        {/* <p>🏭 Surat</p> */}
      </div>

      {/* QUICK LINKS */}
      <div className="footer-section">
        <h4>Quick Links</h4>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/cart">Cart</a>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2026 Amar Singtel. All rights reserved.</p>
      <p className="dev">Developed by VIRANI</p>
    </div>
  </footer>
);

export default Footer;
