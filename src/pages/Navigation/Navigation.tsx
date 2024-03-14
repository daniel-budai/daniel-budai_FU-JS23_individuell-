import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navigation.scss";

const Navigation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__list__item" onClick={() => navigate("/menu")}>
          Meny
        </li>
        <img
          className="nav__list__line"
          src="./src/assets/shortline.svg"
          alt=""
        />
        <li className="nav__list__item" onClick={() => navigate("/about")}>
          Vårt kaffe
        </li>
        <img
          className="nav__list__line"
          src="./src/assets/shortline.svg"
          alt=""
        />
        <li className="nav__list__item" onClick={() => navigate("/login")}>
          Min profil
        </li>
        <img
          className="nav__list__line"
          src="./src/assets/shortline.svg"
          alt=""
        />
        <li className="nav__list__item" onClick={() => navigate("/status")}>
          Orderstatus
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
