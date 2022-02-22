import React from "react";
import Products from "./Products";
import Intro from "./Intro";
import "./Home.css";

const Homepage = () => {
  return (
    <div className="home">
      <div className="home__container">
        <Intro />
        <Products catId={1}></Products>
        <Products catId={2}></Products>
        <Products catId={3}></Products>
      </div>
    </div>
  );
};

export default Homepage;
