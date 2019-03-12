// 1st Reducer
export function hasError(state = false, action) {
  switch (action.type) {
    case "HAS_ERRORED":
      return action.hasError;
    default:
      return state;
  }
}

// 2nd Reducer
export function isLoading(state = false, action) {
  switch (action.type) {
    case "IS_LOADING":
      return action.isLoading;
    default:
      return state;
  }
}

// 3rd Reducer
export function photos(state = [], action) {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return action.photos;
    default:
      return state;
  }
}
