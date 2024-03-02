import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.scss";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/navigation");
  };

  return (
    <div className="landing" onClick={handleNavigation}>
      <img
        className="graphic-left"
        src="./src/assets/graphic-left.svg"
        alt="left"
      />
      <div className="airbean-logo">
        <img src="./src/assets/airbean-icon.svg" alt="airbean-logo" />
      </div>
      <div className="landing-logo">
        <img src="./src/assets/group 1.svg" alt="airbean-logo" />
      </div>
      <img
        className="graphic-right"
        src="./src/assets/graphic-right.svg"
        alt="right"
      />
    </div>
  );
};

export default Landing;
