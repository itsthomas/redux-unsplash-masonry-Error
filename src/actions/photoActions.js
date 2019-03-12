import axios from "axios";

// 1st action-creator
export const pageHasError = bool => dispatch => {
  dispatch({
    type: "HAS_ERRORED",
    hasError: bool
  });
};

// 2nd action-creator
export const pageIsLoading = bool => dispatch => {
  dispatch({
    type: "IS_LOADING",
    isLoading: bool
  });
};

// 3rd action-creator
export const pageFetchDataSuccess = photos => dispatch => {
  dispatch({
    type: "FETCH_DATA_SUCCESS",
    photos
  });
};

// 4th action-creator
export const fetchPhotos = term => async dispatch => {
  const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;
  // dispatch for loader to show
  dispatch(pageIsLoading(true));

  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${term}&client_id=${API_KEY}`
    );

    console.log("Response from action-creator", response);

    // dispatch for loader not to show
    dispatch(pageIsLoading(false));

    dispatch(pageFetchDataSuccess(response.data.results));
  } catch (err) {
    if (err.response) {
      dispatch(pageHasError(true));

      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("Error Response is: ", err.response);

      //   err.response.status === 500 || 300
      //     ? (err.response.data.message = "There was a problem with the request")
      //     : err.response.data.message;

      console.log(`Error status is:  ${err.response.status}`);
      console.log(`Error errors is:  ${err.response.data.errors}`);
    } else if (err.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log("Error Request", err.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error message", err.message);
    }
    console.log("Error Config", err.config);
  }
};
