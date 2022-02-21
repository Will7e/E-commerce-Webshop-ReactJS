import "./App.css";
import Intro from "./components/Intro.js";
import { useState } from "react";
import Products from "./components/Products";
import { propTypes } from "react-bootstrap/esm/Image";

function App() {
  
  return (
    <div>
    <Products catId={1}></Products>
    <Products catId={2}></Products>
    <Products catId={3}></Products>
    </ div>
  );
};

export default App;
