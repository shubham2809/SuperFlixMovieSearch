import * as actionTypes from "./actionTypes";
import axios from "./../../axiosInstance";

const API_KEY = "d1b5c680";

export const initApp = () => {
  return {
    type: actionTypes.INIT_APP
  };
};

export const fethcDetailsSuccess = data => {
  return {
    type: actionTypes.FECTH_DETAILS_SUCCESS,
    data: data
  };
};

export const fethcDetailsFailed = error => {
  return {
    type: actionTypes.FECTH_DETAILS_FAILED,
    error: error
  };
};

export const showModal = () => {
  return {
    type: actionTypes.SHOW_MODAL
  };
};

export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL
  };
};

export const updateWatchedState = imdbID => {
  return {
    type: actionTypes.UPDATE_WATCHED_STATE,
    imdbID: imdbID
  };
};

export const updateSelectedMovieDetails = movie => {
  return {
    type: actionTypes.UPDATE_SELECTED_MOVIE_DETAILS,
    movie: movie
  };
};
 

export const fetchSelectedMovieDetails = (imdbId) => {
  return dispatch => {
  axios.get("?i=" + imdbId  + "&apikey=" + API_KEY)
  .then(res => {
    dispatch(updateSelectedMovieDetails(res.data))
  })
  .catch( error => {
    dispatch(fethcDetailsFailed(error));
  })
}
}

export const fetchDetails = (searchparam) => {
  return dispatch => {
    dispatch(initApp());
    axios
      .get("?s=" + searchparam  + "&apikey=" + API_KEY)
      .then(res => {
        const fetchedDetails = [];
        if( res.data.Search === undefined ){
          dispatch(fethcDetailsFailed());
        }
        else {
          for (let key in res.data.Search) {
            fetchedDetails.push({
              ...res.data.Search[key]
            });
          }
          dispatch(fethcDetailsSuccess(fetchedDetails.slice(0, 10)));
        }
        /*
        * We can change the number of cards that should be displayed on Screen.
        * */
      })
      .catch(error => {
        dispatch(fethcDetailsFailed(error));
      });
  };
};
