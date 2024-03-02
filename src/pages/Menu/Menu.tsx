import React from "react";
import "./Menu.scss";

import HeaderImage from "../../components/Header/Header";
import FooterImage from "../../components/Footer/Footer";

const Menu: React.FC = () => {
  return (
    <>
      <div className="meny-content">
        <div className="header-menu">
          <HeaderImage src="./src/assets/graphic-header.svg" />
        </div>
        <div className="footer-menu">
          <FooterImage src="./src/assets/graphic-footer.svg" />
        </div>
      </div>
    </>
  );
};

export default Menu;
