import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";

import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";

function MovieList() {
  const [moviesData, setMoviesData] = useState(moviesDataJSON);
  const [movies, setMovies] = useState(moviesDataJSON);


  function addMovie(newMovie){
    setMoviesData([...moviesData, newMovie])
    // What if I want to sort or filter before setting the state?
    setMovies([moviesData, newMovie].sort((a,b)=>a.title > b.title))
  }

  function filterMovieList(firstLetter){

    if(firstLetter === "All")setMovies(moviesData)
    else{setMovies(moviesData.filter((elem)=>{return elem.title[0].toLowerCase() === firstLetter.toLowerCase()}))}
    
  }

  return (
    <div>
      <FilterMovies filterMovies={filterMovieList} />
      <AddMovie addMovie={addMovie} />
      {movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
