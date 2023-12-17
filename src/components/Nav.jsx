import React, { useState } from "react";
import "../styles/nav.css";
import { Link, Outlet } from "react-router-dom";


export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <a href="/" className="logo" aria-label="Close">
        <img src="./assets/logo.svg" alt="Little Lemon Logo" />
      </a>
      <div className="burger-menu-icon" onClick={toggleMenu}>
        <div className="burger-menu"></div>
        <div className="burger-menu"></div>
        <div className="burger-menu"></div>
      </div>

      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/">Order Online</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </nav>

    <Outlet />

     </>
  )
}