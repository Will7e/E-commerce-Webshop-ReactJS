import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <div className="image__container">
      <div className="box-1 ">
        <img className="images main-image" src="images/mockup 2.png"></img>
      </div>
      <div className="box-col">
        <img className="images" src="images/IMAGE.png"></img>
        <img className="images" src="images/IMAGE (1).png"></img>
      </div>
      <div className="box-col">
        <img className="images" src="images/IMAGE (3).png"></img>
        <img className="images" src="images/IMAGE (2).png"></img>
      </div>
    </div>
  );
}
export default Intro;
