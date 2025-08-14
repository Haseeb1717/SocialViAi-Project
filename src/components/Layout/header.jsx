import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className="header">
        {/* Logo Left */}
        <div className="logo">
          <div className="logo-icon">N</div>
          <span>Nexpay</span>
        </div>

        {/* Nav Menu Center - Hidden on mobile */}
        <nav className="nav-center">
          <ul className="nav-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        {/* Buttons Right - Hidden on mobile */}
        <div className="nav-right">
          <a href="#" className="login-btn">Login</a>
          <a href="#" className="free-trial-btn">Free Trial</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleSidebar}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={closeSidebar}
      />

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="logo-icon">N</div>
            <span>Nexpay</span>
          </div>
          <button className="close-btn" onClick={closeSidebar}>
            <span className="close-line"></span>
            <span className="close-line"></span>
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul className="sidebar-menu">
            <li><a href="#" onClick={closeSidebar}>Home</a></li>
            <li><a href="#" onClick={closeSidebar}>Features</a></li>
            <li><a href="#" onClick={closeSidebar}>Pricing</a></li>
            <li><a href="#" onClick={closeSidebar}>Contact</a></li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <a href="#" className="sidebar-login-btn" onClick={closeSidebar}>Login</a>
          <a href="#" className="sidebar-trial-btn" onClick={closeSidebar}>Start Free Trial</a>
        </div>
      </div>
    </>
  );
};

export default Header;