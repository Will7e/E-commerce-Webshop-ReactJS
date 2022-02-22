import React from "react";
import { useState } from "react";
import Item from "./Item.js";
import "./Products.css";
import data from "./data";

const products = [
  {
    productId: 1,
    image: "/images/Bild1.png",
    productName: "Feel Active Training Hundsele Svart",
    price: 349,
    categoryId: 1,
  },
  {
    productId: 2,
    image: "/images/Bild2.png",
    productName: "Basic Sweet Valpkoppel",
    price: 149,
    categoryId: 1,
  },
  {
    productId: 3,
    image: "/images/Bild3.png",
    productName: "ProDog Expanderkoppel",
    price: 229,
    categoryId: 1,
  },
  {
    productId: 4,
    image: "/images/Bild4.png",
    productName: "Feel Active Training Padded Sele Röd",
    price: 349,
    categoryId: 1,
  },
  {
    productId: 5,
    image: "/images/Bild5.png",
    productName: "Bam-bones Plus Biff",
    price: 49.9,
    categoryId: 2,
  },
  {
    productId: 6,
    image: "/images/Bild6.png",
    productName: "Trick & Treat Träningsgodis",
    price: 29.9,
    categoryId: 2,
  },
  {
    productId: 7,
    image: "/images/Bild7.png",
    productName: "Whimzees Tugg Tandborste",
    price: 12.9,
    categoryId: 2,
  },
  {
    productId: 8,
    image: "/images/Bild8.png",
    productName: "Gaia Snuffle Aktiveringsmatta Rund",
    price: 249,
    categoryId: 2,
  },
  {
    productId: 9,
    image: "/images/Bild9.png",
    productName: "Trick & Treat Lamm- & Rissnittar 1 kg",
    price: 49.9,
    categoryId: 3,
  },
  {
    productId: 10,
    image: "/images/Bild10.png",
    productName: "Compact Care",
    price: 219,
    categoryId: 3,
  },
  {
    productId: 11,
    image: "/images/Bild11.png",
    productName: "Bam-bones Plus Kyckling (S)",
    price: 49.9,
    categoryId: 3,
  },
  {
    productId: 12,
    image: "/images/Bild12.png",
    productName: "Pawise",
    price: 59.9,
    categoryId: 3,
  },
];


const Products = (props) => {
  const [items, setItems] = useState(products);
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
                price={item.price.toFixed(2)}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default Products;
