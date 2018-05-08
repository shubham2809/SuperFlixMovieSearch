import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Card.css";

/*
* This is a stateless component ( Improve performance )
* This component only return the cards which we are showing up in UI
*/

const Card = props => {
  return (
    <div>
      <div className="card custom-card">
        <div className="card-body">
          <img className="image" src={props.Poster} alt="poster"/>
          <h5 className="card-title">{props.Title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.Year}</h6>
          <div className="overlay">
          <div className="custom-btn-group">
            <button
            type="button"
            onClick={() => props.selectedMovie(props.imdbID)}
            className="btn btn-info"> Details </button>
          <button
            type="button"
            onClick={() => props.addMovietoWatched(props.imdbID)}
            className="btn btn-info"
          >
            {props.watched ? "Remove" : "Watched"}
          </button>
          </div>
          </div>

      
        </div>
      </div>
    </div>
  );
};

export default Card;
