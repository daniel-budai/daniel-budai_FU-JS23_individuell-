import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navigation.scss";

const Navigation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <ul>
        <li onClick={() => navigate("/menu")}>Meny</li>
        <img className="line" src="./src/assets/shortline.svg" alt="" />
        <li onClick={() => navigate("/about")}>Vårt kaffe</li>
        <img className="line" src="./src/assets/shortline.svg" alt="" />
        <li onClick={() => navigate("/profile")}>Min profil</li>
        <img className="line" src="./src/assets/shortline.svg" alt="" />
        <li onClick={() => navigate("/status")}>Orderstatus</li>
      </ul>
    </div>
  );
};

export default Navigation;
