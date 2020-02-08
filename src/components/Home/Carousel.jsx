import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Jenny from "../../images/IMG_2485.jpeg"

function TCarousel() {
  var sectionStyle = {
    backgroundImage: `url(${Jenny})`,
    backgroundSize: `100%`,
  };
  return (
    <Carousel className="slide" data-ride="carousel" >
        <Carousel.Item style = {sectionStyle}>
          <div className = "pad" style = {{height: "400px", color: "white", textAlign: "center"}}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item style = {sectionStyle}>
          <div className = "pad" style = {{height: "400px", color: "white", textAlign: "center"}}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Item>
    </Carousel>
  );
}

export default TCarousel;