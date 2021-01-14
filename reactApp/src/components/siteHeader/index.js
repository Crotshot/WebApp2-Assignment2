import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";

const SiteHeader = () => {

  return (
    <nav className="navbar  navbar-light fixed-top  bg-light">
      <nav className="navbar-brand text-dark">
        <Link className=" text-dark" to="/">
          TMDB Client
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-dark"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-dark">
        For the movie enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-dark"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/movies/popular">
              Popular
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/movies/top_rated">
              Top Rated
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/movies/upcoming">
              Upcoming
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/movies/watch-list">
              Watch List
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;