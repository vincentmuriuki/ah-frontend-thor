// contains all teh reducers of the app
import { combineReducers } from "redux";

import signUpReducer from "./signUpReducer";
import profileReducer from "./profileReducer";
import loginReducer from "./loginReducer";
import social from "./socialReducer";

export default combineReducers({
  signUpReducer,
  auth: loginReducer,
  profile: profileReducer,
  social,
});
