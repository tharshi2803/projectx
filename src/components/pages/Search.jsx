import React, { useState } from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import '../pages/search.css';
import { Col, Row, Container } from "react-bootstrap";
//import Card from 'react-bootstrap/Card';

//import Image1 from '../images/image1.jpeg';


function Search (){
  const [value, setValue] = useState("");
  const area = [
    {
      name: "Engineering",
      value: "engineering",
    },
    {
      name: "Business",
    /*disabled: true,*/
      value: "business",
    },
    {
      name: "Medicine",
      value: "medicine",
    },
    {
      name: "Law",
      value: "law",
    },
    {
      name: "Social science",
      value: "social.science", 
    },
    {
      name: "Science",
      value: "science", 
    },
    {
      name: "Education",
      value: "education", 
    },
    {
      name: "Architecture",
      value: "architecture", 
    },
    {
      name: "Arts",
      value: "arts", 
    },
    {
      name: "Mathematics",
      value: "mathematics", 
    },
    {
      name: "Sports",
      value: "sports", 
    },
    {
      name: "Computer science",
      value: "computer.science", 
    }
  ];
  const qualification = [
    {
      name: "O Level",
      value: "o.level",
    },
    {
      name: "A Level",
      value: "a.level",
    },
    {
      name: "Both O Level and A Level",
      value: "both",
    } 
  ];
  const coursetype = [
    {
      name: "Certificate",
      value: "certificate",
    },
    {
      name: "Diploma",
      value: "diploma",
    },
    {
      name: "HND",
      value: "hnd",
    },
    {
      name: "Degree",
      value: "degree",
    },
  ];
  const type = [
    {
      name: "State",
      value: "state",
    },
    {
      name: "Semi",
      value: "semi",
    },
    {
      name: "Private",
      value: "private",
    } 
  ];
  return (
    <div className="bg" >
    
    <div className="search-ed">
    <Container>
      <Row>
      <Col>
      <div>
        <SelectSearch
          options={area}
          value={value}
          onChange={setValue}
          search
          filterOptions={fuzzySearch}
          placeholder="Educational Area"
        />
      </div></Col>
      <Col>
      <div>
        <SelectSearch
          options={qualification}
          value={value}
          onChange={setValue}
          search
          filterOptions={fuzzySearch}
          placeholder="Qualification"
        />
      </div> </Col>
      <Col>
      <div>
        <SelectSearch
          options={coursetype}
          value={value}
          onChange={setValue}
          search
          filterOptions={fuzzySearch}
          placeholder="Course Type"
        />
      </div>
      </Col>
      <Col>
      <div>
        <SelectSearch
          options={type}
          value={value}
          onChange={setValue}
          search
          filterOptions={fuzzySearch}
          placeholder="Institution Type"
        />
      </div></Col>
      </Row>
      </Container>
  </div>
  {/*<Row xs={1} md={4} className="g-4">
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
  </Row> <br />*/}
    </div>
    
  );
};
export default Search;