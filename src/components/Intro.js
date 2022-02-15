import React from "react";
import image1 from "../images/mockup 2.png"
import image2 from "../images/IMAGE.png"
import image3 from "../images/IMAGE (1).png"
import image4 from "../images/IMAGE (2).png"
import image5 from "../images/IMAGE (3).png"

function Intro () {
    return (
        <div className="intro">
            <img id="picture1" src={image1}></img>
            <img id="picture2" src={image2}></img>
            <img id="picture3" src={image3}></img> 
            <img id="picture4" src={image4}></img> 
            <img id="picture5" src={image5}></img>             
        </div>
    )    
}
export default Intro;