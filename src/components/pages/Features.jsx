import React, { useState } from "react";
import '../pages/features.css';
import { Col, Row, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import imageone from "../images/mentor.jpg";
import imagetwo from "../images/roadmap.jpg";
import imagethree from "../images/webinar.jpg";
import image1 from "../images/quote1.jpg";
import image2 from "../images/quote2.jpg";
import image3 from "../images/quote3.jpg";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function Features() {
  return (
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
      
      <CardGroup>
        <Card border="info" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imageone} width="100px" height="300px"/>
          <Card.Body>
            <Card.Title>Ask from the Expert !</Card.Title>
            <Card.Text>
              Students can ask from subject experts to explore their career paths. We are hand with subject experts with whom students can schedule sessions
              to get advice related to their courses and exploring career.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card border="info" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imagetwo} width="100px" height="300px"/>
          <Card.Body>
            <Card.Title>Find your way</Card.Title>
            <Card.Text>
              Our designed roadmaps will give students an idea about the job positions that are availabale.
              Road map clearly explains the career steps to achieve goal.  
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card border="info" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imagethree} width="100px" height="300px"/>
          <Card.Body>
            <Card.Title>Knowledge sharing Webinars</Card.Title>
            <Card.Text>
              Webinars will be available time to time to provide support to students to get proper knowledge in relavant educational area. 
              Information related to webinars will be availabe in our webiste. 
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
      </CardGroup>




    </>

  )
}
export default Features;
