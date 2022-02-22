import React from "react";
import Button from "./Button.js";
import "./Item.css";

const Item = ({ image, prodName, price }) => {
  return (
    <div className="item">
      <img className="prod prod-image" src={image}></img>
      <p className="prod prod-name">{prodName}</p>
      <p className="prod prod-price">{price} kr</p>
      <Button>Köp</Button>
    </div>
  );
};

export default Item;
