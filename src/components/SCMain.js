import React, { useState } from "react";
import SCBasket from "./SCBasket";
import { data } from "./data";

function SCMain() {
  const [products, setProducts] = useState(data);
  for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
  }
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

  const removeFromCart = (product) => {
    const exist = cartItems.find((x) => x.productId === product.productId);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.productId !== product.productId));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.productId === product.productId
            ? { ...exist, qty: exist.qty - 1 }
            : x
        )
      );
    }
  };

  return (
    <div className="scmain">
      <SCBasket addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems}></SCBasket>
    </div>
  );
}

export default SCMain;
