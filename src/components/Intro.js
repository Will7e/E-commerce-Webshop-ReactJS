import React from "react";
import image1 from "../images/mockup 2.png";
import image2 from "../images/IMAGE.png";
import image3 from "../images/IMAGE (1).png";
import image4 from "../images/IMAGE (2).png";
import image5 from "../images/IMAGE (3).png";
import "./Intro.css";

function Intro() {
  return (
    <div className="image__container">
      <div className="box-1">
        <img className="images" src={image1}></img>
      </div>
      <div className="box-2">
        <img className="images" src={image2}></img>
      </div>
      <div className="box-3">
        <img className="images" src={image3}></img>
      </div>
      <div className="box-4">
        <img className="images" src={image4}></img>
      </div>
      <div className="box-5">
        <img className="images" src={image5}></img>
      </div>
    </div>
  );
}
export default Intro;
