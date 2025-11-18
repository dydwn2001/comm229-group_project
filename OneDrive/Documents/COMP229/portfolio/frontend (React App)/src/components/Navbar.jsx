import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './logo';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Logo />
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/education">Education</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;