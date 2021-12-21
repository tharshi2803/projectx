import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import imageone from "./images/img1.jpg";
import imagetwo from "./images/img2.jpg";
import imagethree from "./images/img3.jpg";

function Slider(){
    return(
<Carousel fade>
<Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={imageone }
      alt="First slide"
      height="600px"
      width="100px"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={imagetwo}
      alt="Second slide"
      height="600px"
      width="100px"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={imagethree}
      alt="Third slide"
      height="600px"
      width="100px"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    )
}
export default Slider;