import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/userStore";
import "./Status.scss";
import drone from "../../assets/drone.svg";

const StatusPage: React.FC = () => {
  const navigate = useNavigate();
  const orderHistory = useUserStore((state) => state.orderHistory);
  const latestOrder = orderHistory[orderHistory.length - 1];

  const handleClick = () => {
    navigate("/navigation");
  };

  return (
    <div className="status-page">
      <p className="status-ordernumber">
        Ordernummer: <span>{latestOrder?.id || ""}</span>{" "}
      </p>
      <img src={drone} alt="drone" />
      <h1 className="order-text">
        Din beställning <br /> är på väg
      </h1>
      <p className="minutes">
        <span>13</span> minuter
      </p>
      <button className="confirm-button" onClick={handleClick}>
        Ok, cool!
      </button>
    </div>
  );
};

export default StatusPage;
