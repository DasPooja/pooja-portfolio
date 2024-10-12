import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
        <span className="coder-text">
          Coder<span className="blinking-underscore">_</span>
        </span>
      </div>
      <ul className={`navbar-right ${isMenuOpen ? "show" : ""}`}>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
      </ul>
      <div className="theme-toggle">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
