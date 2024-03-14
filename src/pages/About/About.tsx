import React from "react";
import "./About.scss";
import HeaderImage from "../../components/Header/Header";
import FooterImage from "../../components/Footer/Footer";
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";
import Cart from "../../components/Cart/Cart";
import headerImage from "../../assets/graphic-header.svg";
import footerImage from "../../assets/graphic-footer.svg";

const About: React.FC = () => {
  return (
    <>
      <article className="about">
        <div className="about__menu">
          <HamburgerMenu />
        </div>
        <div className="about__cart">
          <Cart />
        </div>
        <div className="about__header">
          <HeaderImage src={headerImage} />
        </div>
        <h1 className="about__title">Vårt kaffe</h1>
        <p className="about__description">
          <b>
            Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
            grounds dripper, crema, strong whipped, variety extra iced id lungo
            half and half mazagran. Pumpkin spice.
          </b>
        </p>
        <br />
        <p className="about__description">
          Que dark fair trade, spoon decaffeinated, barista wings whipped, as
          rich aftertaste, con panna milk black, arabica white rich beans single
          shot extra affogato. So affogato macchiato sit extraction instant
          grinder seasonal organic, turkish single shot, single origin, and
          robusta strong to go so dripper. Viennese froth, grounds
          caramelization skinny aromatic cup kopi-luwak, fair trade flavour,
          frappuccino medium, café au lait flavour cultivar ut bar instant
          kopi-luwak.
        </p>
        <br />
        <p className="about__description">
          Roast id macchiato, single shot siphon mazagran milk fair trade est
          aroma a half and half and, so, galão iced to go, whipped as cream cup
          pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half
          and half at, that, percolator macchiato trifecta and body as arabica
          dripper. In galão black java milk sit trifecta, robusta, acerbic café
          au lait instant shop latte. Seasonal bar shop filter aroma id, crema,
          affogato viennese cultivar aftertaste, seasonal, percolator cream
          black, galão flavour, milk aromatic turkish skinny crema.
        </p>
        <section className="about__profile">
          <img
            src="./src/assets/eva-cortado.jpg"
            alt=""
            className="about__profile-pic"
          />
          <h3 className="about__profile-name">Eva Cortado</h3>
          <p className="about__profile-title">
            <small>VD & Grundare</small>
          </p>
        </section>
        <div className="about__footer">
          <FooterImage src={footerImage} />
        </div>
      </article>
    </>
  );
};

export default About;
