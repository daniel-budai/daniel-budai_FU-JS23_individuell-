import React from "react";
import "./ProfilePage.scss";
import { useUserStore } from "../../store/userStore";
import HeaderImage from "../../components/Header/Header";
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";
import headerImage from "../../assets/graphic-header.svg";

const ProfilePage: React.FC = () => {
  const user = useUserStore((state) => state.user);
  const orderHistory = useUserStore((state) => state.orderHistory);

  const totalSpent = orderHistory.reduce(
    (total, order) => total + order.totalAmount,
    0
  );

  return (
    <div className="profile-page">
      <HamburgerMenu />
      <HeaderImage src={headerImage} />
      <img src="./src/assets/profile.svg" alt="" />
      <h2 className="profile-page__profile-name">{user?.name}</h2>
      <p className="profile-page__profile-email">{user?.email}</p>
      <div className="profile-page__order-info-container">
        <h2 className="profile-page__order-history">Orderhistorik</h2>
        {orderHistory.map((order, index) => (
          <div className="profile-page__previous-order-list" key={index}>
            <div className="profile-page__order-info">
              <p className="profile-page__order-info--order-id">#{order.id}</p>
              <p className="profile-page__order-date">{order.date}</p>{" "}
            </div>
            <p className="profile-page__total-order-sum">
              total ordersumma{" "}
              <span className="profile-page__total-ammount">
                {order.totalAmount} kr
              </span>
            </p>
            <hr />
          </div>
        ))}
        <h2 className="profile-page__total-spent">
          Totalt spenderat
          <span className="profile-page__total-spent-ammount">
            {" "}
            {totalSpent} kr
          </span>
        </h2>
      </div>
    </div>
  );
};

export default ProfilePage;
