import React from "react";
import rectangle1 from "../images/Rectangle (1).svg";
import rectangle2 from "../images/Rectangle (2).svg";
import rectangle3 from "../images/Rectangle (3).svg";
import rectangle from "../images/Rectangle.svg";
import "./Shipping.css";

function Shipping() {
  return (
    <div className="shipping">
      <div>
        <img className="truck__logo" src={rectangle} />
        <span> Snabb leverans</span>
      </div>
      <div>
        <img className="box__logo" src={rectangle1} />
        <span> Fri frakt över 500 kr</span>
      </div>
      <div>
        <img className="pin__logo" src={rectangle2} />
        <span> Klubben för bästa vänner</span>
      </div>
      <div>
        <img className="chat__logo" src={rectangle3} />
        <span> Professionell service</span>
      </div>
    </div>
  );
}

export default Shipping;
