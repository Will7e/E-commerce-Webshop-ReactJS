import react from "react";
import Button from "./Button.js";

const Item = ({ image, prodName, price }) => {
  return (
    <div className="item">
      <img className="prod-image" src={image}></img>
      <p className="prod-name">{prodName}</p>
      <p className="prod-price">{price} kr</p>
      <Button>Köp</Button>
    </div>
  );
};

export default Item;
