// src/Navbar.js
import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-top">
        <img src='https://www.pngfind.com/pngs/m/175-1754152_dara-celtic-knot-hd-png-download.png' className='image'/>
        <div className="logo"><strong>LOGO</strong></div>
        <div className="navbar-icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-heart"></i>
          <i className="fas fa-shopping-bag"></i>
          <i className="fas fa-user"></i>
          <span className="language-select">ENG <i className="fas fa-chevron-down"></i></span>
        </div>
      </div>
      <nav className="navbar-bottom">
        <ul className="navbar-links">
          <li>Shop</li>
          <li>Skills</li>
          <li>Stories</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
