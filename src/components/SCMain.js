import React, { useState } from "react";
import SCBasket from "./SCBasket";
import data from "./data";

function SCMain() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]); //cartArray
  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.productId === product.productId);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.productId === product.productId
            ? { ...exist, qty: exist.qty + 1 }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  return (
    <div className="scmain">
      <SCBasket addToCart={addToCart} cartItems={cartItems}></SCBasket>
    </div>
  );
}

export default SCMain;
