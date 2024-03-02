import React, { useState } from "react";
import "./HamburgerMenu.scss";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
      <img
        src="./src/assets/navicon.png"
        alt="Hambuger menu icon"
        className="navicon"
        onClick={toggleMenu}
      />
    </div>
  );
};

export default HamburgerMenu;
