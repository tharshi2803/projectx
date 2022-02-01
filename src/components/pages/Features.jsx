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
import video from "../images/video.mp4";



function Features() {
  return (
    <>
    <div className="features">
      <div className="header-features">Explore more Features</div><br />
      <div className="video">
        <video width="900" height="500" align-items="center" controls >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <br />
      <br />
      <br />
      
      <div class="features-main">
        <ul class="features-cards">
          <li class="cards_item">
            <div class="features-card">
              <div class="card_image"><img src={imageone} alt="mentor" /></div>
              <div class="card_content">
                <div class="card_title">Ask from expert!</div>

                <div class="card_text">
                  <p className="features-p">Students can ask from subject experts to explore their career paths. We are hand with subject experts with whom students can schedule sessions
                  to get advice related to their courses and exploring career. </p>
                  
                </div>
              </div>
            </div>
          </li>

          <li class="cards_item">
            <div class="features-card">
              <div class="card_image"><img src={imagetwo} alt="roadmap. " /></div>
              <div class="card_content">
                <div class="card_title">Find your way <span class='right'></span></div>
                <div class="card_text">
                  <p className="features-p">Our designed roadmaps will give students an idea about the job positions that are available. Road map clearly explains the career steps to achieve goal. 
                  </p>
                  
                </div>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="features-card">
              <div class="card_image"><img src={imagethree}  alt="webinar " /></div>
              <div class="card_content">
                <div class="card_title">Knowledge Sharing webinars </div>
                <div class="card_text">
                  
                  <p className="features-p">Webinars will be available time to time to provide support to students to get proper knowledge in relavant educational area. Information related to webinars will be availabe in our webiste. </p>
                  
                </div>
              </div>
            </div>
          </li>
        </ul>
        <br />
      </div>
      </div>
</>

  )
}
export default Features;