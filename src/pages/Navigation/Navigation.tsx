import React from "react";
import "./Navigation.scss";

const Navigation: React.FC = () => {
  return (
    <>
      <div className="nav">
        <ul>
          <li>Meny</li>
          <img className="line" src="./src/assets/shortline.svg" alt="" />
          <li>Vårt kaffe</li>
          <img className="line" src="./src/assets/shortline.svg" alt="" />
          <li>Min profil</li>
          <img className="line" src="./src/assets/shortline.svg" alt="" />
          <li>Orderstatus</li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
