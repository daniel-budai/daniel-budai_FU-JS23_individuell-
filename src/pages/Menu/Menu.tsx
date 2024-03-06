// MenuPage.tsx
import React, { useEffect, useState } from "react";
import "./Menu.scss";
import HeaderImage from "../../components/Header/Header";
import FooterImage from "../../components/Footer/Footer";
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";
import Cart from "../../components/Cart/Cart";
import { Menu } from "../../types/menu";
import { useStore } from "../../store/store";

const MenuPage: React.FC = () => {
  const [menu, setMenu] = useState<Menu[]>([]);
  const { addItem } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://airbean-api-xjlcn.ondigitalocean.app/api/beans"
        );
        if (!response.ok) throw new Error();

        const data = await response.json();

        setMenu(data.menu); //validera responsen, typa
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="meny-content">
        <div className="header-menu">
          <HamburgerMenu />
          <Cart />
          <HeaderImage src="./src/assets/graphic-header.svg" />
        </div>

        <h1 className="meny-title">Meny</h1>
        <div className="menu-list">
          {menu.map((item) => (
            <div key={item.id}>
              <div className="title-price">
                <button className="add-button" onClick={() => addItem(item)}>
                  <img src="./src/assets/+.svg" alt="Add" />
                </button>
                <div>
                  <h2>{item.title} </h2>
                  <span>{item.desc}</span>
                </div>
                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="footer-menu">
          <FooterImage src="./src/assets/graphic-footer.svg" />
        </div>
      </div>
    </>
  );
};

export default MenuPage;
