import react from "react";
import Button from "./Button.js";
import "./Item.css";

const Item = ({ image, prodName, price }) => {
  return (
    <div className="item">
      <img className="prod-image" src={image}></img>
      <p className="prod-name">{prodName}</p>
      <p className="prod-price">{price}:-</p>
      <Button>Köp</Button>
    </div>
  );
};

export default Item;
