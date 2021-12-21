import React, { useState} from 'react';
import '../pages/search.css';

function Search(){
  const [selects, setSelects]=useState();
  return(
    
    <div className="row">
      <h1>Filter Your Course details </h1>
      <div className="column">
      <select>
        <option value="area">Area</option>
        <option>Engineering</option>
        <option>Business</option>
        <option>Medicine</option>
        <option>Law</option>
        <option>Social science</option>
        <option>Science</option>
        <option>Education</option>
        <option>Architecture</option>
        <option>Arts</option>
        <option>Mathematics</option>
        <option>Sports</option>
        <option>Computer science</option>  
      </select>
      </div>

      <div className="column">
      <select>
        <option>Qualification</option>
        <option>O Level</option>
        <option>A Level</option>
        <option>Both O/L and A/L</option>
      </select>
      </div>

      <div className="column">
      <select>
        <option>Course type</option>
        <option>Certificate</option>
        <option>Diploma</option>
        <option>HND</option>
        <option>Degree</option>
      </select>
      </div>

      <div className="column">
      <select>
        <option>Institution</option>
        <option>State</option>
        <option>Semi</option>
        <option>Private</option>
      </select>
      </div>
      {/*<button>Search</button>*/}
    </div>
  )
}
export default Search;