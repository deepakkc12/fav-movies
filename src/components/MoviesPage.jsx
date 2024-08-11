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
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };

  useEffect(() => {
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
