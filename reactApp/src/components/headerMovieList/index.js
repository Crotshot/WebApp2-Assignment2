import React from "react";

const Header = ({ title, numMovies }) => {
  return (
    <div className="row">
      <div className="col-md-6 offset-4">
        <h2  className="text-warning">
          {`${title}  `}
          <span className="badge badge-pill badge-info">{numMovies}</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;