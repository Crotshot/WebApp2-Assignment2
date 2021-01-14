import React, { useState, useContext } from "react";
import Header from "../headerMovieList";
import {MovieListDouble,MovieListSingle} from "../movieList";
import FilterControls from "../filterControls";

const clearT = () => {
  window.localStorage.clear();
  window.location.assign("/");
};

export const MovieListPageTemplateDouble = ({ movies, title, action0, action1 }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genre = Number(genreFilter)
  let displayedMovies = movies
    .filter(m => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(m => {
      return  genre > 0
        ? m.genre_ids.includes(Number(genreFilter))
        : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <Header title={title} numMovies={displayedMovies.length} />
      <FilterControls onUserInput={handleChange} numMovies={displayedMovies.length}/>
      <button onClick={clearT} className="nav-link text-dark" to="/login">Log Out</button>
      <MovieListDouble
       action0={action0}
       action1={action1}
       movies={displayedMovies}
    />
    </>
  );
};

export const MovieListPageTemplateSingle = ({ movies, title, action}) => {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genre = Number(genreFilter)
  let displayedMovies = movies
    .filter(m => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(m => {
      return  genre > 0
        ? m.genre_ids.includes(Number(genreFilter))
        : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <Header title={title} numMovies={displayedMovies.length} />
      <FilterControls onUserInput={handleChange} numMovies={displayedMovies.length}/>
      <button onClick={clearT} className="nav-link text-dark" to="/login">Log Out</button>
      <MovieListSingle
       action={action}
       movies={displayedMovies}
    />
    </>
  );
};

export default MovieListPageTemplateDouble;