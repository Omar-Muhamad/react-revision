import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = ["about", "contact-us"];
  return (
    <header>
      <div className="logo">
        <img src="logo.png" alt="site logo" />
      </div>
      <nav className="nav-bar">
        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <li key={link + index} className="nav-link">
              <Link to={`#${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
