import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="wb-header">
      <div className="wb-container">
        {/* Logo */}
        <div className="wb-logo">
          <span className="logo-icon">🪐</span>
          <span className="logo-text">WriteBot</span>
        </div>

        {/* Navigation */}
        <nav className="wb-nav">
          <a href="#home">Home</a>
          <a href="#pricing">Pricing</a>
          <a href="#blog">Blog</a>
          <div className="wb-dropdown">
            <button className="dropbtn">Pages ▾</button>
            <div className="wb-dropdown-content">
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
        </nav>

        {/* Auth buttons */}
        <div className="wb-auth">
          <button className="wb-login">Login</button>
          <button className="wb-signup">Sign Up</button>
        </div>
      </div>
    </header>
  );
}
