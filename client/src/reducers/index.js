import { combineReducers } from "redux";
import { authReducer } from "../reducers/auth";
import { mediumsReducer } from "../reducers/mediums";
import { reviewReducer } from "../reducers/reviews";

export default combineReducers({
  auth: authReducer,
  mediums: mediumsReducer,
  reviews: reviewReducer,
});
