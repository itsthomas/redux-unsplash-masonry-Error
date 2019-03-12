import { combineReducers } from "redux";
import { hasError, isLoading, photos } from "./photoReducer";

// WE could call our data anything. Here we called it photos
// Now we can access it in all components via this.props.photos
const rootReducer = combineReducers({
  hasError,
  isLoading,
  photos
});

export default rootReducer;
