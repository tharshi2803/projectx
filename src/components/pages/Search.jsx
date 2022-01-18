import React, {useState} from "react";
import AsyncSelect from "react-select/async";
import axios, { Axios } from "axios";

function Search(){
  
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

  const handleInputChange = value =>{
    setValue(value);
  }
  const handleChange = value =>{
    setSelectedValue(value);
  }
  const fetchData = () =>{
    //return axios.get('https://reqres.in/api/users?page=1')
    return axios.get('https://projectx-rebornit.herokuapp.com/api/v1/area')
    .then(result =>{
      const res = result.data.data;
      return res;
    })
  }

  return(
    <div className="container">
      <div className="row alert alert-info">Selected: {JSON.stringify(selectedValue || {}, null, 2)}</div>
      <div className="row">
        <div className="col-md-4">
          <div className="col-md-4">
            <AsyncSelect
            cacheOptions
            defaultOptions
            value={selectedValue}
            getOptionLabel={e => e.areaName}
            getOptionValue={e => e.areaID}
            loadOptions={fetchData}
            onInputChange={handleInputChange}
            onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Search;

//import { useState } from "react";
//import axios, { Axios } from "axios";
//import React, {useEffect } from 'react';
//import Card from 'react-bootstrap/Card'


{/*function Search(){
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://projectx-rebornit.herokuapp.com/api/v1/area")
    .then(res => {
      console.log(res.data)
      setData(res.data)
    }).catch(err => console.log(err))
  }, [])

  const arr = data.map((data,index) => {

  return(
    <>
    {/* <tr>
      <td>{data.areaID}</td>
      <td>{data.areaName}</td>
      <td>{data.areaDescription}</td>
    </tr> 

<Card style={{ width: '18rem' }}>

<Card.Body>
  <Card.Title>{data.areaID}</Card.Title>
  <Card.Text>
  {data.areaName}
  </Card.Text>
  <Card.Text>
  {data.areaDescription}
  </Card.Text>
  <button variant="primary"></button>
</Card.Body>
</Card>
</>
  )
})

return(
  <table>
    <th>
    </th>
    {arr}
  </table>
 
)
}
export default Search; */}


