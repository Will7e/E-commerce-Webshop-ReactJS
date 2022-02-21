import React from "react";
import Header from "./Header";
import Intro from "./Intro.js";
import Button from "./Button.js";
import SizeButton from "./SizeButton.js";
import Shipping from "./Shipping";
import Products from "./Products.js";
import "./Home.css";

const Homepage = () => {
  return (
    <div className="home">
      <div className="home__container">
        <Intro />
        <Shipping></Shipping>
        <Products catId={1}></Products>
        <Products catId={2}></Products>
        <Products catId={3}></Products>
      </div>
    </div>
  );
};

export default Homepage;
