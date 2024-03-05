import React from "react";
import { useNavigate } from "react-router-dom";
import "./Status.scss";
import drone from "../../assets/drone.svg";

const StatusPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/navigation");
  };

  return (
    <div className="status-page">
      <p className="status-ordernumber">
        Ordernummer: <span>#12DV23F</span>
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
