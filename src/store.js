import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

// This way we can add all our middleares to just an array
const middleware = [thunk];

// createStore gets 3 arguments. createStore(reducer, initialState, middleware)
// We use compose to be able to add the line for Redux-DevTools after applyMiddleware
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
