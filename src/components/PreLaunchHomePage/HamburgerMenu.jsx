import React, { useState } from 'react';
import '../../hamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <nav className="navbar">
    <div className='hamburgerContainer'>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="/">For Patients</a></li>
          <li><a href="/about">For Pharmacies</a></li>
          <li><a href="/services">For Employers</a></li>
          <li><a href="/contact">For Providers</a></li>
        </ul>
      </div>
    // </nav>
  );
};

export default HamburgerMenu;
