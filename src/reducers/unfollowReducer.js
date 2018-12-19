/* eslint-disable no-fallthrough */
/* eslint-disable consistent-return */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-lone-blocks */

import {alert} from "../actions/loginActions";

const unfollowChecker = (state, action) => {
  switch (action.type) {
  case "UNFOLLOW":{
    if (action.payload) {
      window.location.reload();
      return {
        ...state,
        data: action.payload
      };
    }};

  case "UNFOLLOW_ERROR":{
    if (action.payload) {
      console.log("error payload>>", action.payload);
      // errorAlert("error", action.payload);
      alert("error", action.payload, null, null, null);
      return {
        ...state,
        errors: state.errors,
        errors: action.payload
      };
    }};

  default:
    return state;
  }
};

const initialState = {
  errors: "",
  results: {}
};

export default (state = initialState, action) => (unfollowChecker(state, action));
