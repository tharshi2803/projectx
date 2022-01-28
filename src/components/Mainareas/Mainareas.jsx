import React from "react";
import Card from 'react-bootstrap/Card';
import { Col, Row, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../Mainareas/mainareas.css";

import Image1 from '../images/image1.jpg';
import Image2 from '../images/image2.jpg';
import Image3 from '../images/image3.jpg';
import Image4 from '../images/image4.jpg';
import Image5 from '../images/image5.jpg';
import Image6 from '../images/image6.jpg';
import Image7 from '../images/image7.jpg';
import Image8 from '../images/image8.jpg';
import Image9 from '../images/image9.jpg';
import Image10 from '../images/image10.jpg';
import Image11 from '../images/image11.jpg';
import Image12 from '../images/image12.jpg';

function Mainareas() {
  return (
    <>
      <br />
      <div className="h1-head">
        Top Educational Areas
      </div><br />

      <Row>
        <Col>
          <div className="card">
            <Link to="engineering">
              <img src={Image1} height="180px" width="320px" />
            </Link>
          </div>
        </Col>

        <Col>
          <div className="card">
            <Link to="business">
              <img src={Image2} height="180px" width="320px" />
            </Link>
          </div>
        </Col>

        <Col>
          <div className="card">
            <Link to="medicine">
              <img src={Image3} height="180px" width="320px" />
            </Link>
          </div>
        </Col>

        <Col>
          <div className="card">
            <Link to="law">
              <img src={Image4} height="180px" width="320px" />
            </Link>
          </div>
        </Col>

      </Row> 
      <br />

      <Row>

        <Col>
          <div className="card">
            <Link to="socialscience">
              <img src={Image5} height="180px" width="320px" />
            </Link>
          </div>
        </Col>

        <Col>
          <div className="card">
            <Link to="science">
              <img src={Image6} height="180px" width="320px" />
            </Link>
          </div>
        </Col>

        <Col>
          <div className="card">
            <Link to="education">
              <img src={Image7} height="180px" width="320px" />
            </Link>
          </div>
        </Col>

        <Col>
          <div className="card">
            <Link to="architecture">
              <img src={Image8} height="180px" width="320px" />
            </Link>
          </div>
        </Col>

      </Row>
      <br />

      <Row>

        <Col>
          <div className="card">
            <Link to="arts">
              <img src={Image9} height="180px" width="320px" />
            </Link>
          </div>
        </Col>

        <Col>
          <div className="card">
            <Link to="mathematics">
              <img src={Image10} height="180px" width="320px" />
            </Link>
          </div>
        </Col>

        <Col>
          <div className="card">
            <Link to="sports">
              <img src={Image11} height="180px" width="320px" />
            </Link>
          </div>
        </Col>

        <Col>
          <div className="card">
            <Link to="computerscience">
              <img src={Image12} height="180px" width="320px" />
            </Link>
          </div>
        </Col>

      </Row>

    </>
  )
}
export default Mainareas;