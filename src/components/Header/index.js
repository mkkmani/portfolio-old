import React, { useState } from "react";
import { IoMdMenu, IoIosCloseCircleOutline } from "react-icons/io";
import "./index.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header-container">
      <p>Manikanta Ketha</p>
      <div className="hamburger-menu" onClick={toggleMenu}>
        {showMenu ? (
          <IoIosCloseCircleOutline className="menu-icon" />
        ) : (
          <IoMdMenu className="menu-icon" />
        )}
      </div>
      <ul className="header-ul lg">
        <li>
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={toggleMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </li>
      </ul>
      {showMenu && (
        <ul className="sm-menu" aria-expanded={showMenu}>
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
