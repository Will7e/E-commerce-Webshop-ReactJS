import React from "react";

function SCBasket(props) {
  const { cartItems, addToCart, removeFromCart } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  return (
    <div className="scbasket">
      <h2>Varukorg</h2>
      <div>{cartItems.length === 0 && <div>Korgen är tom</div>}</div>
      {cartItems.map((item) => (
        <div key={item.productId} classname="row">
          <div>{item.productName}</div>
          <div>
            <button onClick={() => addToCart(item)} className="add">
              +
            </button>
            <button onClick={() => removeFromCart(item)} className="remove">
              -
            </button>
          </div>
          <div>
            {item.qty} * {item.price.toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SCBasket;
