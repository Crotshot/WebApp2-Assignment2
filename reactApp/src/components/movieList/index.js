import React from "react";
import {MovieCardDouble,MovieCardSingle} from "../movieCard";
import "./movieList.css";

export const MovieListDouble = ({movies, action0, action1}) => {
  const movieCards = movies.map(m => (
    <MovieCardDouble key={m.id} movie={m} action0={action0} action1={action1}/>
  ));
  return <div className="row movies bg-secondary">{movieCards}</div>;
};

export const MovieListSingle = ({movies, action}) => {
  const movieCards = movies.map(m => (
    <MovieCardSingle key={m.id} movie={m} action={action}/>
  ));
  return <div className="row movies bg-secondary">{movieCards}</div>;
};

export default MovieListDouble;