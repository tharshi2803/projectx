import React, { useState } from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import '../pages/search.css';
import { Col, Row, Container } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";


function Search() {
  const [areaValue, setAreaValue] = useState("");
  const [qualificationValue, setQualificationValue] = useState("");
  const [courseValue, setCourseValue] = useState("");
  const [typeValue, setTypeValue] = useState("");

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

   const filter = () => {
    try {
      //return axios.get('https://reqres.in/api/users?page=1')
      return axios.post('https://projectx-rebornit.herokuapp.com/api/v1/course/filtered')
        .then(result => {
          const res = result.data;
          //setElements(res);

          console.log(result.data[0])
          return res;
        })
    }
    catch (err) {
      console.log()
    }
  }
  // const handleInputChange = value => {
  //   setValue(value);
  // }
  // const handleChange = value => {
  //   setAreaValue(value);
  // }

   return (
     <div className="bg" >
       <div className="search-ed">
         <Container>
           <Row>
             <Col>
               <div>
                 <SelectSearch
                   options={area}
                   value={areaValue}
                   onChange={setAreaValue}
                   search
                   filterOptions={fuzzySearch}
                   placeholder="Area"
                 />
               </div></Col>
             <Col>
               <div>
                <SelectSearch
                   options={qualification}
                   value={qualificationValue}
                   onChange={setQualificationValue}
                   search
                   filterOptions={fuzzySearch}
                   placeholder="Qualification"
                 />
               </div> </Col>
             <Col>
               <div>
                 <SelectSearch
                   options={coursetype}
                   value={courseValue}
                   onChange={setCourseValue}
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
                   value={typeValue}
                   onChange={setTypeValue}
                  search
                   filterOptions={fuzzySearch}
                   placeholder="Institution Type"
                 />
               </div></Col>
           </Row>
           {/* <button className="btn-search">Search</button> */}
         </Container>
         {/* <img src="https://cdn.wallpapersafari.com/94/43/Hb1dC0.jpg" /> */}
       </div>

      
         
    </div>


   );
 };
 export default Search;
