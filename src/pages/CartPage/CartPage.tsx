import React from "react";
import { Item, useStore } from "../../store/store";
import { useUserStore } from "../../store/userStore";
import { useNavigate } from "react-router-dom";
import "./CartPage.scss";

interface CartPageProps {
  close: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ close }) => {
  const { items, getTotalPrice, increaseQuantity, decreaseQuantity } =
    useStore();
  const addToOrderHistory = useUserStore((state) => state.addToOrderHistory);
  const persist = useUserStore((state) => state.persist);
  const navigate = useNavigate();

  const handleCheckout = () => {
    const totalAmount = getTotalPrice();
    const now = new Date();
    const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(now.getDate()).padStart(2, "0")}`;

    const newOrder = {
      items: items,
      date: date,
      totalAmount: totalAmount,
    };

    addToOrderHistory(newOrder);
    persist();
    alert("Order complete");
    navigate("/status");
    close();
  };

  return (
    <>
      <div className="cart-page">
        <h1 className="cart-page__title">Din beställning</h1>
        <div className="cart-items">
          {items.map((item: Item) => (
            <div key={item.id} className="item-container">
              <div className="cart-page__item-row">
                <h2 className="cart-page__item-row__title">{item.title}</h2>
                <img
                  className="cart-page__dotted-line"
                  src="./src/assets/Line 1.svg"
                  alt=""
                />
                <p className="cart-page__counter">
                  <img
                    src="./src/assets/arrow-up.svg"
                    alt=""
                    onClick={() => increaseQuantity(item.id)}
                  />
                  {item.quantity}
                  <img
                    src="./src/assets/arrow-down.svg"
                    alt=""
                    onClick={() => decreaseQuantity(item.id)}
                  />
                </p>
              </div>
              <p className="cart-page__total__text">{item.price} kr</p>
            </div>
          ))}
        </div>
        <section className="cart-page__total">
          Total <img src="./src/assets/Line 1.svg" alt="" />
          {getTotalPrice()} kr
          <p className="cart-page__total__text">inkl moms + drönarleverans</p>
        </section>
        <button className="cart-page__button" onClick={handleCheckout}>
          Take my money!
        </button>
      </div>
    </>
  );
};

export default CartPage;
