import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MovieCardDouble = ({movie, action0, action1}) => {
  return (
    <div className="col-sm-3">
      <div className="card  bg-dark">
      <Link to={`/movies/${movie.id}`}>
        <img
          className="card-img-tag center "
          alt={movie.title}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <h4 className="card-title ">{movie.title}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} color = "orange" />
            <span> {movie.release_date}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} color = "gold"/>
            <span> {movie.vote_average}</span>
          </p>
        </div>
        <div className="card-footer">
           {action0(movie)}
        </div>
        <div className="card-footer">
           {action1(movie)}
        </div>
      </div>
    </div>
  );
};

export const MovieCardSingle = ({movie, action}) => {

  return (
    <div className="col-sm-3">
      <div className="card  bg-dark">
      <Link to={`/movies/${movie.id}`}>
        <img
          className="card-img-tag center "
          alt={movie.title}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <h4 className="card-title ">{movie.title}</h4>
          <p color = "orange">
            <FontAwesomeIcon icon={["fas", "calendar"]} color = "orange"  />
            <span> {movie.release_date}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} color = "gold" />
            <span> {movie.vote_average}</span>
          </p>
        </div>
        <div className="card-footer">
           {action(movie)}
        </div>
      </div>
    </div>
  );
};

export default MovieCardDouble;