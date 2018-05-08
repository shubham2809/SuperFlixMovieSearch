import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const MovieSummary = (props) =>  {
    const {Title, Plot , Director, Runtime , Actors , Genre } = props.selectedMovie;

    let IMDBRatings  = 'NA';
    let RTRatings = 'NA';

     if(props.selectedMovie.Ratings.length >= 1){
       IMDBRatings = props.selectedMovie.Ratings[0].Value
    }
    if(props.selectedMovie.Ratings.length >= 2){
       RTRatings = props.selectedMovie.Ratings[1].Value;
    }
    
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item"><strong>Name: </strong>{Title}</li>
          <li className="list-group-item"><strong>IMDB Ratings: </strong>{IMDBRatings}</li>
          <li className="list-group-item"><strong>Rotten Tomatoes Ratings: </strong>{RTRatings}</li>
          <li className="list-group-item"><strong>Description: </strong>{Plot}</li>
          <li className="list-group-item"><strong>Director: </strong>{Director}</li>
          <li className="list-group-item"><strong>Duration: </strong>{Runtime}</li>
          <li className="list-group-item"><strong>Actors: </strong>{Actors}</li>
          <li className="list-group-item"><strong>Genres: </strong>{Genre}</li>
        </ul>
        <a href="http://www.novanet.net/" className="btn btn-primary active" role="button" aria-pressed="true">Buy Tickets</a>
      </div>
    );
  }

export default MovieSummary;
