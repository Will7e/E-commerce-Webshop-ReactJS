import React from "react";
import "./Intro.css";
import ImageCarousel from "./ImageCarousel";

function Intro() {
  return (
    <div className="image__container">
      <div className="box-1 ">
        <ImageCarousel />
      </div>
      <div className="box-col">
        <img className="images" src="images/box-col-1-4.jpg"></img>
        <img className="images" src="images/box-col-2-4.jpg"></img>
      </div>
      <div className="box-col">
        <img className="images" src="images/box-col-3-4.jpg"></img>
        <img className="images" src="images/box-col-4-4.jpg"></img>
      </div>
    </div>
  );
}
export default Intro;
