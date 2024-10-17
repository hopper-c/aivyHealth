import React, { useState } from 'react';
import '../../hamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='hamburgerContainer'>
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="/">For Patients</a></li>
        <li><a href="/pharmacies">For Pharmacies</a></li>
        <li><a href="/employers">For Employers</a></li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
