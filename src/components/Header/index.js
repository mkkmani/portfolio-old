import React from "react";
import "./index.css";

const Header = (props) => {
  const { scrollTo } = props;
  const handleScrollTo = (section) => {
    scrollTo(section);
  };

  return (
    <div className="header-container">
      <p>Manikanta Ketha</p>
      <ul className="header-ul">
        <li>
          <button
            className="header-btn"
            onClick={() => handleScrollTo("about")}
          >
            About
          </button>
        </li>
        <li>
          <button
            className="header-btn"
            onClick={() => handleScrollTo("projects")}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className="header-btn"
            onClick={() => handleScrollTo("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
