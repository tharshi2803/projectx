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
      
      <div class="features-main">
        <ul class="features-cards">
          <li class="cards_item">
            <div class="features-card">
              <div class="card_image"><img src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg" alt="mixed vegetable salad in a mason jar. " /></div>
              <div class="card_content">
                <h2 class="card_title">Farmstand Salad <span class='right'>$9</span></h2>

                <div class="card_text">
                  <p>Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of leafy greens and seasonal vegetables, fresh from the farmer's market.</p>

                  <p>Served with your choice of dressing on the side:</p>
                  <ul class='option'>
                    <li>Housemade ranch</li>
                    <li>Cherry balsamic vinaigrette</li>
                    <li>Creamy chipotle</li>
                    <li>Avocado green goddess</li>
                    <li>Honey mustard</li>
                  </ul>

                  <p>Add your choice of protein for $2 more.</p>
                </div>
              </div>
            </div>
          </li>

          <li class="cards_item">
            <div class="features-card">
              <div class="card_image"><img src="https://assets.codepen.io/652/photo-1520174691701-bc555a3404ca.jpeg" alt="a Reuben sandwich on wax paper. " /></div>
              <div class="card_content">
                <h2 class="card_title">Ultimate Reuben <span class='right'>$18</span></h2>
                <div class="card_text">
                  <p>All great meals take time, but this one takes it to the next level! More than 650 hours of fermenting, brining, aging, and curing goes into each and every one of our legendary Reuben sandwiches.
                  </p>
                  <p>Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipe to the cave-aged Swiss cheese, right down to the pickle. The only thing we didn't make on the premises is the toothpick ( but we're looking into how to do that). </p>
                  <p>This <em>unforgettable</em> sandwich has all of the classic Reuben elements:</p>
                  <ul class='option'>
                    <li>corned beef</li>
                    <li>rye bread</li>
                    <li>creamy Russian dressing</li>
                    <li>sauerkraut</li>
                    <li>Served with a sweet gherkin pickle</li>
                  </ul>
                  <p class="noSub"><em>No substitions please!</em></p>

                  <p>Add a side of french fries or sweet potato fries for $2 more, or our housemade pub chips for $1.</p>
                </div>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="features-card">
              <div class="card_image"><img src="https://assets.codepen.io/652/photo-1544510808-91bcbee1df55.jpeg" alt="A side view of a plate of figs and berries. " /></div>
              <div class="card_content">
                <h2 class="card_title">Fig &amp; Berry Plate <span class='right'>$16</span></h2>
                <div class="card_text">
                  <p><span class="note">Seasonal</span></p>
                  <p>A succulent sextet of fresh figs join with a selection of bodacious seasonal berries in this refreshing, shareable dessert.</p>
                  <p>Choose your drizzle:</p>
                  <ul class='option'>
                    <li>Cherry-balsamic vinegar</li>
                    <li>Local honey</li>
                    <li>Housemade chocolate sauce</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
</>

  )
}
export default Features;