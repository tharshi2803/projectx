import React, { useState } from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import '../pages/search.css';

function Search (){
  const [value, setValue] = useState("");
  const [multipleValues, setMultipleValues] = useState([]);
  const area = [
    {
      name: "Engineering",
      value: "annie.cruz",
    },
    {
      name: "Business",
    /*disabled: true,*/
      value: "eli.shelton",
    },
    {
      name: "Medicine",
      value: "loretta.rogers",
    },
    {
      name: "Law",
      value: "lloyd.fisher",
    },
    {
      name: "Social science",
      value: "tiffany.gonzales", 
    }
  ];
  return (
    <div className="App">
      <h1>Testing &lt;Select/&gt;</h1>
      <div style={{ margin: "0 auto", width: 300 }}>
        <SelectSearch
          options={area}
          value={value}
          onChange={setValue}
          search
          filterOptions={fuzzySearch}
          placeholder="Search something"
        />
      </div>
      <div style={{ margin: "0 auto", width: 300, marginTop: 100 }}>
        <SelectSearch
          /*multiple={true}*/
          printOptions={"on-focus"}
          closeOnSelect={false}
          options={area}
          value={multipleValues}
          onChange={setMultipleValues}
          search
          filterOptions={fuzzySearch}
          placeholder="Search something"
        />
      </div>
    </div>
  );
};
export default Search;