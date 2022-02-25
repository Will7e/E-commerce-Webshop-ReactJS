import React from "react";
import "./Shipping.css";

function Shipping() {
  return (
    <div className="shipping">
      <div className="wrapperr">
        <div className="container">
          <img className="truck__logo" src="../images/Rectangle.svg" />

          <div className="container__text">
            <p> Snabb leverans</p>
            <p>Lorem ipsum</p>
          </div>
        </div>

        <div className="container">
          <img className="box__logo" src="../images/Rectangle (1).svg" />
          <div className="container__text">
            <p> Snabb leverans</p>
            <p>Lorem ipsum</p>
          </div>
        </div>

        <div className="container">
          <img className="pin__logo" src="../images/Rectangle (2).svg" />
          <div className="container__text">
            <p> Snabb leverans</p>
            <p>Lorem ipsum</p>
          </div>
        </div>

        <div className="container">
          <img className="chat__logo" src="../images/Rectangle (3).svg" />
          <div className="container__text">
            <p> Snabb leverans</p>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
