import React, { useState } from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import '../pages/search.css';
import { Col, Row, Container } from "react-bootstrap";


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
    </div>
    
  );
};
export default Search;