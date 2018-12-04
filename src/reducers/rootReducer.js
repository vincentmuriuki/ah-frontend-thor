// contains all teh reducers of the app
import { combineReducers } from "redux";
import signUpReducer from "./signUpReducer";
import profileReducer from "./profileReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
  signUpReducer,
  auth: loginReducer,
  profile: profileReducer
});
