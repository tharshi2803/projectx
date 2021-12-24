import React from "react";
import Card from 'react-bootstrap/Card';
import { Col, Row } from "react-bootstrap";

import Image1 from '../images/image1.jpeg';
import axios from 'axios';

function Engineering (){
  axios({
    method: 'get',
    url: `https://projectx-rebornit.herokuapp.com/api/v1/area/1`,
  }).then((response) => {
    console.log(response.data);
  });
  
  
  // Invoking get method to perform a GET request
  axios.get(`https://projectx-rebornit.herokuapp.com/api/v1/area/1`).then((response) => {
    console.log(response.data);
  });


  {/*state = {
    engineering: []
  }

  componentDidMount(){
    axios.get(`https://projectx-rebornit.herokuapp.com/api/v1/area/1`)
      .then(res => {
        const engineering = res.data;
        this.setState({ engineering });
      })
    }*/}

    return(
    <div className="head-e">Engineering
    {/*<ul>
        {
          this.state.engineering
            .map(engineering =>
              <li key={engineering.id}></li>
            )
        }
      </ul>*/}

 <Row xs={1} md={4} className="g-4">
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={Image1} />
        <Card.Body>
          <Card.Title>Engineering</Card.Title>
          <Card.Text>
            University
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={Image1} />
        <Card.Body>
          <Card.Title>Engineering</Card.Title>
          <Card.Text>
            University
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={Image1} />
        <Card.Body>
          <Card.Title>Engineering</Card.Title>
          <Card.Text>
            University
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={Image1} />
        <Card.Body>
          <Card.Title>Engineering</Card.Title>
          <Card.Text>
            University
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row> <br />

<Row xs={1} md={4} className="g-4">
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={Image1} />
        <Card.Body>
          <Card.Title>Engineering</Card.Title>
          <Card.Text>
            University
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={Image1} />
        <Card.Body>
          <Card.Title>Engineering</Card.Title>
          <Card.Text>
            University
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={Image1} />
        <Card.Body>
          <Card.Title>Engineering</Card.Title>
          <Card.Text>
            University
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={Image1} />
        <Card.Body>
          <Card.Title>Engineering</Card.Title>
          <Card.Text>
            University
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row> <br />

<Row xs={1} md={4} className="g-4">
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={Image1} />
        <Card.Body>
          <Card.Title>Engineering</Card.Title>
          <Card.Text>
            University
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={Image1} />
        <Card.Body>
          <Card.Title>Engineering</Card.Title>
          <Card.Text>
            University
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={Image1} />
        <Card.Body>
          <Card.Title>Engineering</Card.Title>
          <Card.Text>
            University
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={Image1} />
        <Card.Body>
          <Card.Title>Engineering</Card.Title>
          <Card.Text>
            University
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
</div>
    )

}

export default Engineering;