import React from "react";
import "./checkout.css";
import "./Button.css";
import Basketlogo from "../logopack/basket-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  const subtotal = basket.reduce((total, item) => item.price + total, 0);

  return (
    <div className="checkout">
      <div className="checkout__container">
        <div className="checkout__products">
          <div className="checkout__logo">
            <img className="basket-logo" src={Basketlogo}></img>
            <h3 className="customer-basket">Kundvagn</h3>
          </div>

          <div className="product__container">
            <div className="product__price">
              <h5>Produkt</h5>
              <h5 className="price-tag">Pris</h5>
              <h5 style={{ color: "white" }}></h5>
            </div>
          </div>

          <div className="basket__product">
            {basket.map((item) => (
              <CheckoutProduct
                image={item.image}
                prodName={item.prodName}
                price={item.price}
              />
            ))}
          </div>
        </div>

        <CurrencyFormat
          renderText={(value) => (
            <div className="checkout__summary">
              <div>
                <h4 className="summary-title">Ordersammanfattning</h4>
                <p className="subtotal">
                  Subtotal ( {basket?.length} artiklar )
                  <span className="subtotal-price">{value} kr</span>
                </p>
                <p className="subtotal shipping-price">
                  Frakt <span className="subtotal-price">Grattis</span>
                </p>
              </div>

              <div className="total-price">
                <p>
                  Totalpris: <span className="price-number">{value} kr</span>
                </p>

                <button className="buy-button button">
                  Fortsätt till utcheckningen
                </button>

                <div className="bottom__summary">
                  <p className="summary__bottom">
                    <FontAwesomeIcon className="check__icon" icon={faCheck} />{" "}
                    <span>Fri frakt</span>
                  </p>
                  <p>
                    <FontAwesomeIcon className="check__icon" icon={faCheck} />{" "}
                    <span>Express </span>
                  </p>
                </div>
              </div>
            </div>
          )}
          decimalScale={2}
          displayType="text"
          value={subtotal}
          thousandSeparator={false}
        />
      </div>
    </div>
  );
};

export default Checkout;
