import * as actionTypes from "./../actions/actionTypes";

const initialState = {
  moviesArr: [],
  loading: false,
  error: false,
  showModal: false,
  selectedMovie: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /* -------------------------------------------------------------------------------------------------------- */
    case actionTypes.INIT_APP:
      return {
        ...state,
        loading: true
      };
    /* -------------------------------------------------------------------------------------------------------- */
    case actionTypes.UPDATE_WATCHED_STATE:
      return {
        ...state,
        //Updating the watched flag to true/false
        moviesArr: state.moviesArr.map(movie => {
          return movie.imdbID === action.imdbID
            ? { ...movie, watched: !movie.watched }
            : movie;
        }),
        loading: false
      };
    /* -------------------------------------------------------------------------------------------------------- */
    case actionTypes.FECTH_DETAILS_SUCCESS:
      // Updating the array Immuatably
      // Making a deep clone of payload data and adding new attribute
      let payload = action.data.map(arr => {
        return {
          ...arr,
          //Adding new Attribute
          watched: false
        };
      });
      //Filtering data , so that state will only get updated if there is new data
      let stateArray = payload.filter(elem => {
        return elem.imdbID !== state.imdbID;
      });
      
      return {
        ...state,
        loading: false,
        // Again we are deep cloning array
        moviesArr: [...stateArray]
      };
    /* -------------------------------------------------------------------------------------------------------- */
    case actionTypes.UPDATE_SELECTED_MOVIE_DETAILS:
    console.log(action.movie);
      return {
        ...state,
        selectedMovie: {
          ...action.movie,
          Ratings: [...action.movie.Ratings]
        },
        showModal: true
      };
    /* -------------------------------------------------------------------------------------------------------- */
    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        showModal: true
      };
          /* -------------------------------------------------------------------------------------------------------- */
    case actionTypes.CLOSE_MODAL:
    return {
      ...state,
      showModal: false
    };
    /* -------------------------------------------------------------------------------------------------------- */
    case actionTypes.FECTH_DETAILS_FAILED:
      return {
        ...state,
        loading: true,
        error: true
      };
    /* -------------------------------------------------------------------------------------------------------- */

    default:
      return state;
  }
};

export default reducer;
