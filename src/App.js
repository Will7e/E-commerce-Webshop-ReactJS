import "./App.css";
import Intro from "./components/Intro.js";
import Item from "./components/Item.js";
import { useState } from "react";

const products = [
  {
    productName: "Feel Active Training Hundsele Svart",
    price: 349.0,
    categoryId: 1,
  },
  { productName: "Basic Sweet Valpkoppel", price: 149.0, categoryId: 1 },
  { productName: "ProDog Expanderkoppel", price: 229.0, categoryId: 1 },
  {
    productName: "Feel Active Training Padded Sele Röd",
    price: 349.0,
    categoryId: 1,
  },
  { productName: "Bam-bones Plus Biff", price: 49.9, categoryId: 2 },
  { productName: "Trick & Treat Träningsgodis", price: 29.9, categoryId: 2 },
  { productName: "Whimzees Tugg Tandborste", price: 12.9, categoryId: 2 },
  {
    productName: "Gaia Snuffle Aktiveringsmatta Rund",
    price: 249.0,
    categoryId: 2,
  },
  {
    productName: "Trick & Treat Lamm- & Rissnittar 1 kg",
    price: 49.9,
    categoryId: 3,
  },
  { productName: "Compact Care", price: 219.0, categoryId: 3 },
  { productName: "Bam-bones Plus Kyckling (S)", price: 49.9, categoryId: 3 },
  { productName: "Pawise", price: 59.9, categoryId: 3 },
];

const product = {
  image: require('../images/Bild1.png'),
  name: "Damir",
  price: 500,
};

function App() {
  /* const [items, setItems] = useState(products);
  return (
    <div className="prods">
      {items.map((item, i) => {
        return <Item key={i} prodName={item.productName} price={item.price} />;
      })}
    </div>
  );*/
  return (
    <Item image={product.image} prodName={product.name} price={product.price} />
  );
}

export default App;
