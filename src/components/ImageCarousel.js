import React from "react";
import { Carousel } from "react-bootstrap";
import "./ImageCarousel.css";
import image1 from "../logopack/mockup.png";
import image2 from "../logopack/8.png";
import image3 from "../logopack/9.png";

const ImageCarousel = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3>Premium products</h3>
            <p>Våra produkter är våra, du hittar dem inte någon annanstans.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Premium quality</h3>
            <p>Våra produkter är av högsta kvalitet och tål all sorts bus och lek.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Perfect fit</h3>
            <p>
              Som hundägare själva vet vi hur viktigt perfekt passform är för hundens komfort.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
