import React from "react";
import "./checkout.css";
import Basketlogo from "../logopack/basket-logo.svg";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__container">
        <div className="checkout__products">
          <div className="checkout__logo">
            <img className="basket-logo" src={Basketlogo}></img>
            <h2 className="customer-basket">Kundvagn</h2>
          </div>

          <div className="product__price">
            <h4>Produkt</h4>
            <h4>Pris</h4>
          </div>

          <div className="basket__product"></div>
        </div>

        <div className="checkout__summary">
          <div>
            <h3 className="summary-title">Sammanfattning</h3>
            <p>
              Subtotal<span>(3 artiklar)</span>
              <span>849kr</span>
            </p>
            <p>
              Frakt <span>Grattis</span>
            </p>
          </div>

          <div>
            <p>
              Total: <span>849 kr</span>
            </p>
            <button>Fortsätt till utcheckningen</button>
            <p>
              logo{" "}
              <span>
                fri frakt{" "}
                <span>
                  logo <span>express</span>
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
