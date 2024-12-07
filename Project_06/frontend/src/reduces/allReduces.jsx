import { combineReducers } from "redux";
import userReducer from "./User";

const allReducers = combineReducers({
  user: userReducer,
});

export default allReducers;
