import { useState } from "react";

function FilterMovies(props) {

  const [firstLetter, setFilter] = useState("")


  function handleSelect(event){
   const firstLetter = event.target.value
   setFilter(firstLetter)

   props.filterMovies(firstLetter)
  }

 
  return (
    <div className="FilterMovies">
      <label>Show movies by first letter:</label>
      <select value={firstLetter} onChange={handleSelect}>
        <option value="All">All</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
    </div>
  );
}

export default FilterMovies;
