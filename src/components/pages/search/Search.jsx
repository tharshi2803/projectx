import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

function Search() {
    return (
      <>
    <Dropdown className="d-inline mx-2">
    <Dropdown.Toggle id="dropdown-autoclose-true">
      Area
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#">Engineering</Dropdown.Item>
      <Dropdown.Item href="#">Business</Dropdown.Item>
      <Dropdown.Item href="#">Medicine</Dropdown.Item>
      <Dropdown.Item href="#">Law</Dropdown.Item>
      <Dropdown.Item href="#">Social science</Dropdown.Item>
      <Dropdown.Item href="#">Science</Dropdown.Item>
      <Dropdown.Item href="#">Education</Dropdown.Item>
      <Dropdown.Item href="#">Architecture</Dropdown.Item>
      <Dropdown.Item href="#">Arts</Dropdown.Item>
      <Dropdown.Item href="#">Mathematics</Dropdown.Item>
      <Dropdown.Item href="#">Sports</Dropdown.Item>
      <Dropdown.Item href="#">Computer science</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown className="d-inline mx-2">
    <Dropdown.Toggle id="dropdown-autoclose-true">
      Qualification
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#">O Level</Dropdown.Item>
      <Dropdown.Item href="#">A Level</Dropdown.Item>
      <Dropdown.Item href="#">Both O/L and A/L</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  <Dropdown className="d-inline mx-2">
    <Dropdown.Toggle id="dropdown-autoclose-true">
      Course Type
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#">Certificate</Dropdown.Item>
      <Dropdown.Item href="#">Diploma</Dropdown.Item>
      <Dropdown.Item href="#">HND</Dropdown.Item>
      <Dropdown.Item href="#">Degree</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  <Dropdown className="d-inline mx-2">
    <Dropdown.Toggle id="dropdown-autoclose-true">
      Institution
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#">State</Dropdown.Item>
      <Dropdown.Item href="#">Semi</Dropdown.Item>
      <Dropdown.Item href="#">Private</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</>
    );
}

export default Search;