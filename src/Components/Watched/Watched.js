import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Watched.css";
/*
* This is a stateless component ( Improve performance )
* This component only return the Coparison table which we are showing up in UI
*/

const Watched = props => {
  return (
    <ul className="list-group custom-list-group">
      <h5 className="mb-1">Watched Movies</h5>
      {props.movies.map(movie => <li key={movie.imdbID} className="fade show list-group-item list-group-item-success">{movie.Title}</li>)}
    </ul>
  );
};

export default Watched;
