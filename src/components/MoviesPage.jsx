import React, { useEffect, useState } from "react";
import Header from "./Header";
import MovieList from "./MovieList";
import inception from "../assets/images/inception.webp";
import interstellar from "../assets/images/interstellar.jpg";
import darkKnight from "../assets/images/darkKnight.webp";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTYyOWQyOGMwMzA1ZGFhM2VmNmQyODg4MTY4OTFlMSIsIm5iZiI6MTcyMzM4OTcyNi4zOTU5MjYsInN1YiI6IjY1ZDIyZjNmZGI3MmMwMDE2MzM5NTU2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lYZw31s5Q9CPb4YDnNmXGMV3CuSumcQ8dmnr2DA0Nc4",
    },
  };

  useEffect(() => {
    console.log("hellooo");
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovies(response.results);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Header />
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
