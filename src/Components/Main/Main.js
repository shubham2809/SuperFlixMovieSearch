import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import * as actions from "./../../store/actions/index";
import Card from "./Card/Card";
import "./Main.css";
import Watched from "./../Watched/Watched";
import Modal from "./../UI/Modal/Modal";
import MovieSummary from "./../MovieSummary/MovieSummary";
import Spinner from "./../UI/Spinner/Spinner";

/*
    * This Component is responsible for rendering Top Ten Movies Cards and Compare Table and Modal
    * This is the heart of the application which decides and cuases rendering on DOM
*/

class Main extends Component {
  /*
    * While component fetch the data asnchornously from the server , it may cause unnessary rendering 
    * We are making sure , component is only updated once it has fetched all the data
  */

  // shouldComponentUpdate(nextProps) {
  //   if (nextProps.movies.length > 0) {
  //     return true;
  //   }
  //   return false;
  // }
  /*----------------------------------------------------------
  * The reference to this method is passed to stateless child component Card
  * Although we could have directly access state from child component , but it would have made application heavy
  */
  movieSelectHandler = imdbID => {
    // //Declaring a class private variable for future use
    // this.selectedMovieId = Id;
    this.props.fetchselectedMovie(imdbID);
  };

  wathchedMovieSelectHandler = imdbID => {
    this.props.onUpdateWatchedState(imdbID);
  };
  /*----------------------------------------------------------*/

  render() {
    /*-----------Initializing Cards----------------------------------------*/
    let cards = null;



    //Accessing state from Store as props
    if (!this.props.loading) {
    cards = [...this.props.movies].map(elem => {
      return (
        <Card
          selectedMovie={imdbID => this.movieSelectHandler(imdbID)} //Passed on as reference method
          addMovietoWatched={imdbID => this.wathchedMovieSelectHandler(imdbID)} //Passed on as reference method
          imdbID={elem.imdbID}
          key={elem.imdbID}
          Year={elem.Year}
          Poster={elem.Poster}
          Title={elem.Title}
          watched={elem.watched}
        />
      );
    });
  }

    /*-----------Initializing Watched----------------------------------------*/
    const watchedMovies = [...this.props.movies].filter(movie => {
      return movie.watched === true;
    });

    /*--------------------------------------------------------------------*/

    return (
      <div className="main-container">
        {watchedMovies.length >= 1 ? <Watched movies={watchedMovies} /> : null}

        {this.props.loading ? <Spinner/> :<div className="wrap">{cards}</div>}
        
        <Modal show={this.props.show}>
          {this.props.selectedMovie ? (
            <MovieSummary selectedMovie={this.props.selectedMovie} />
          ) : null}
        </Modal>
      </div>
    );
  }
}

/*-----------Connecting to state & dispatch as props----------------------------------------*/
const mapStateToProps = state => {
  return {
    movies: [...state.moviesArr],
    show: state.showModal,
    loading: state.loading,
    selectedMovie: state.selectedMovie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchselectedMovie: imdbID =>  dispatch(actions.fetchSelectedMovieDetails(imdbID)),
    onUpdateWatchedState: imdbID => dispatch(actions.updateWatchedState(imdbID)),
    onShowModal: () => dispatch(actions.showModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);