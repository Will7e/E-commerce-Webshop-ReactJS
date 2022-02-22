import React from "react";
import { useState } from "react";
import Item from "./Item.js";
import "./Products.css";
import { data } from "./data.js";

const Products = (props) => {
  const [items, setItems] = useState(data);
  return (
    <>
      <h3 className="category-nr">Category {props.catId}</h3>
      <div className="prods">
        {items.map((item, i) => {
          if (item.categoryId === props.catId) {
            return (
              <Item
                key={i}
                image={item.image}
                prodName={item.productName}
                price={item.price}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default Products;
