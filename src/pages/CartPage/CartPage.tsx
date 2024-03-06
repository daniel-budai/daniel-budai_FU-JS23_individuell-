// CartPage.tsx
import { Item, useStore } from "../../store/store";
import "./CartPage.scss";

const CartPage = () => {
  const { items, getTotalPrice, increaseQuantity, decreaseQuantity } =
    useStore();
  return (
    <>
      <div className="cart-page">
        <h1 className="title-in-cart-page">Din beställning</h1>
        <div className="cart-items">
          {items.map((item: Item) => (
            <div key={item.id} className="item-container">
              <div className="item-row">
                <h2 className="">{item.title}</h2>
                <img
                  className="dotted-line"
                  src="./src/assets/Line 1.svg"
                  alt=""
                />
                <p className="counter">
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
              <p>{item.price} kr</p>
            </div>
          ))}
        </div>
        <section className="total">
          Total <img src="./src/assets/Line 1.svg" alt="" />
          {getTotalPrice()} kr
          <p>inkl moms + drönarleverans</p>
        </section>
        <button className="cart-page-button">Take my money!</button>
      </div>
    </>
  );
};

export default CartPage;
