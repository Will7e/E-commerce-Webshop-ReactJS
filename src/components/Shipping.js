import React from "react";
import "./Shipping.css";

function Shipping() {
  return (
    <div className="shipping">
      <div className="wrapping">
        <div className="box-holder">
          <img
            className="shipping__logo truck-logo"
            src="../images/Rectangle.svg"
          ></img>
          <span className="shipping__text">
            Snabb leverans <span>Du får din beställning snabbt</span>
          </span>
        </div>

        <div className="box-holder">
          <img className="shipping__logo " src="../images/Rectangle (1).svg" />
          <span className="shipping__text">
            Fri frakt vid beställning över 500kr{" "}
            <span>Endast 49kr om mindre</span>
          </span>
        </div>

        <div className="box-holder">
          <img className="shipping__logo" src="../images/Rectangle (2).svg" />
          <span className="shipping__text">
            Kundklubben <span>För bästa vänner</span>
          </span>
        </div>

        <div className="box-holder">
          <img className="shipping__logo" src="../images/Rectangle (3).svg" />
          <span className="shipping__text">
            Professionell service<span>Vi finns alltid här för dig</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
