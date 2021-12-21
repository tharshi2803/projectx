import React, { useState } from "react";
import '../pages/features.css';
import { Col, Row, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import image from "../images/quote1.jpg";
import imageone from "../images/img1.jpg";
import imagetwo from "../images/img2.jpg";
import imagethree from "../images/img3.jpg";
import image1 from "../images/quote1.jpg";
import image2 from "../images/quote2.jpg";
import image3 from "../images/quote3.jpg";


function Features () {
    return(
        <>
    <div className="headerb">Explore more Features</div>
      {/*<div className="headerTitles">
        <span className="headerTitleSm">Explore more Features</span>
        {/*<span className="headerTitleLg">Explore more Features</span>
      </div>
      {/*<img src={image} height="500px" width="1000px" align-items="center"/>*/}
    
    <Carousel fade>
<Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
      height="500px"
      width="10px"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
      height="500px"
      width="10px"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
      height="500px"
      width="10px"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    <br />
    <br />
    <Container fluid style={{ paddingLeft: "50px", paddingRight: "50px" }}>
    <Row xs={1} md={4} className="g-4">
 
    {Array.from({ length: 1 }).map((_, idx) => (
      <Col> 
        <div className="card">
          <Link to="engineering">
          <img src={imageone} height="180px" width="320px"/> 
          </Link>
        </div>  
      </Col>
    ))}
    
    
    {Array.from({ length: 1 }).map((_, idx) => (
      <Col>
        <div className="card">
        <Link to="business">
          <img src={imagetwo} height="180px" width="320px"/> 
          </Link>
        </div> 
      </Col>
    ))}
    
    {Array.from({ length: 1 }).map((_, idx) => (
      <Col>
        <div className="card">
        <Link to="medicine">
          <img src={imagethree} height="180px" width="320px"/> 
          </Link>
        </div> 
      </Col>
    ))}
    
    
    {Array.from({ length: 1 }).map((_, idx) => (
      <Col>
        <div className="card">
        <Link to="law">
          <img src={imageone} height="180px" width="320px"/> 
          </Link>
        </div> 
      </Col>
    ))}
  </Row> 
    </Container>



</>
 
    )
}
export default Features;
