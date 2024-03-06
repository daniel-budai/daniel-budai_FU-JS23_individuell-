// Cart.tsx
import { useState } from "react";
import "./Cart.scss";
import CartPage from "../../pages/CartPage/CartPage";
import { useStore } from "../../store/store";
const Cart: React.FC = () => {
  const [showCart, setShowCart] = useState(false);
  const getTotalQuantity = useStore((state) => state.getTotalQuantity);

  const handleClick = () => {
    setShowCart(true);
  };

  return (
    <div className="cart">
      <img
        src="./src/assets/bag.svg"
        alt="Cart icon"
        className="bag"
        onClick={handleClick}
      />
      {getTotalQuantity() > 0 && <span>{getTotalQuantity()}</span>}{" "}
      {showCart && <CartPage close={() => setShowCart(false)} />}
    </div> //fixa later
  );
};

export default Cart;
