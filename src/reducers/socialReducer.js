import { SOCIAL_LOGIN } from "../actions/types";

const initialUserState = {
  isLoggedIn: false,
  user: null,
  token: null
};

const social = (state = initialUserState, action) => {
  switch (action.type) {
  case SOCIAL_LOGIN:{
    const { token, user } = action.payload;
    return { user: user, isLoggedIn: true, token: token };
  }
  default:
    return state;
  }
};
export default social;
