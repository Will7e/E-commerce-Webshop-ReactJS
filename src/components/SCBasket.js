import React from "react";

function SCBasket(props) {
  const { cartItems } = props;
  return (
    <div className="scbasket">
      <h2>Varukorg</h2>
      <div>{cartItems.length === 0 && <div>Korgen är tom</div>}</div>
    </div>
  );
}

export default SCBasket;
