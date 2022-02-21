import React from "react";
import "./App.css";
import Intro from "./components/Intro.js";
import { useState } from "react";
import Products from "./components/Products";
import { propTypes } from "react-bootstrap/esm/Image";
import Button from "./components/Button.js";
import SizeButton from "./components/SizeButton.js";
import Header from "./components/Header.js";
import Shipping from './components/Shipping.js';

function App() {
  
  return (
    <div className="App">
      <div>
        <Header></Header>
        <Intro />
        <Shipping></Shipping>
    <Products catId={1}></Products>
    <Products catId={2}></Products>
    <Products catId={3}></Products>
    </ div>
    </div>
  );
};

export default App;
