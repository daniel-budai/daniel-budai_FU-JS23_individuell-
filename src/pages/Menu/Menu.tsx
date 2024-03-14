import React, { useEffect, useState } from "react";
import "./Menu.scss";
import HeaderImage from "../../components/Header/Header";
import FooterImage from "../../components/Footer/Footer";
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";
import Cart from "../../components/Cart/Cart";
import { Menu } from "../../types/menu";
import { useStore } from "../../store/store";
import headerImage from "../../assets/graphic-header.svg";
import footerImage from "../../assets/graphic-footer.svg";

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

        setMenu(data.menu);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="menu__content">
        <div className="menu__header">
          <HamburgerMenu />
          <Cart />
          <HeaderImage src={headerImage} />
        </div>
        <h1 className="menu__title">Meny</h1>
        <div className="menu__list">
          {menu.map((item) => (
            <div key={item.id} className="menu__item">
              <button
                className="menu__add-button"
                onClick={() => addItem(item)}
              >
                <img
                  src="./src/assets/+.svg"
                  alt="Add"
                  className="menu__add-button__img"
                />
              </button>
              <div>
                <h2 className="menu__item__title">{item.title} </h2>
                <span className="menu__item__desc">{item.desc}</span>
              </div>
              <span className="menu__item__price">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="menu__footer">
          <FooterImage src={footerImage} />
        </div>
      </div>
    </>
  );
};

export default MenuPage;
