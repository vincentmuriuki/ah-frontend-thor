/* eslint-disable no-fallthrough */
/* eslint-disable consistent-return */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-lone-blocks */

const loginChecker = (state, action) => {
  switch (action.type) {
  case "LOGIN":{
    if (action.payload) {
      return {
        ...state,
        token: action.payload
      };
    }};

  case "LOGIN_ERROR":{
    if (action.payload) {
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
  user: null
};

export default (state = initialState, action) => (loginChecker(state, action));
