import React from "react";
import { useNavigate } from "react-router-dom";
import "./HamburgerMenu.scss";

const HamburgerMenu: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/navigation");
  };

  return (
    <div className="hamburger-menu">
      <img
        src="./src/assets/navicon.png"
        alt="Hambuger menu icon"
        className="navicon"
        onClick={handleClick}
      />
    </div>
  );
};

export default HamburgerMenu;
