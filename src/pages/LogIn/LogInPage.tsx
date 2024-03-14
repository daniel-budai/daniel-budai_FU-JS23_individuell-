import React from "react";
import "./LogInPage.scss";

import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/userStore";
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";
import HeaderImage from "../../components/Header/Header";
import headerImage from "../../assets/graphic-header.svg";

const LogInPage: React.FC = () => {
  const navigate = useNavigate();
  const loginUser = useUserStore((state) => state.loginUser);
  const persist = useUserStore((state) => state.persist);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = (
      event.currentTarget.elements.namedItem("name") as HTMLInputElement
    ).value;
    const email = (
      event.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;
    loginUser(name, email);
    persist();
    navigate("/profile");
  };

  return (
    <div className="login">
      <div className="login__overlay">
        <HamburgerMenu />
        <HeaderImage src={headerImage} />
        <div className="login__content">
          <img
            src="./src/assets/airbean-circle.svg"
            alt=""
            className="login__image"
          />
          <h1 className="login__title">Välkommen till AirBean-familjen!</h1>
          <p className="login__text">
            Genom att skapa ett konto nedan kan du spara och se din
            orderhistorik.
          </p>
          <form onSubmit={handleSubmit} className="login__form">
            Name:
            <br />
            <input type="text" name="name" className="login__input" />
            <br />
            Email:
            <br />
            <input type="email" name="email" className="login__input" />
            <br />
            <label className="login__gdpr-label">
              <input type="radio" className="login__gdpr-confirm" />
              GDPR Ok!
            </label>
            <button className="login__button" type="submit">
              Brew me a cup!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
