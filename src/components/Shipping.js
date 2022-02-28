import React from "react";
import "./Shipping.css";

function Shipping() {
  return (
    <div className="shipping">
      <div>
        <img className="truck__logo" src="../images/Rectangle.svg" />
        <span> Snabb leverans</span>
      </div>
      <div>
        <img className="box__logo" src="../images/Rectangle (1).svg" />
        <span> Fri frakt över 500 kr</span>
      </div>
      <div>
        <img className="pin__logo" src="../images/Rectangle (2).svg" />
        <span> Klubben för bästa vänner</span>
      </div>
      <div>
        <img className="chat__logo" src="../images/Rectangle (3).svg" />
        <span> Professionell service</span>
      </div>
    </div>
  );
}

export default Shipping;
