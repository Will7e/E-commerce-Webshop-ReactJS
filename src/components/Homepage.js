import React from "react";
import Header from "./Header";
import Intro from "./Intro.js";
import Button from "./Button.js";
import SizeButton from "./SizeButton.js";
import Shipping from "./Shipping";
import "./Home.css";

const Homepage = () => {
  return (
    <div className="home">
      <div className="home__container">
        <Intro />
      </div>
    </div>
  );
};

export default Homepage;
