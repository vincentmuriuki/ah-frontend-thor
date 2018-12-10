const intialState = {
  item: {},
  success: false,
  loading: false
};

export default (state = intialState, action) => {
  switch (action.type) {
  case "SIGNUP_ACTION":
    return {
      state,
      item: action.payload,
      success: true
    };
  default:
    return state;
  }
};
