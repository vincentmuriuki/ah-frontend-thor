import { SIGNUP } from "./types";

const REGISTER_URL = "https://ah-backend-thor.herokuapp.com/api/users/";
const SignUpAction = data => dispatch => fetch(REGISTER_URL, {
  method: "POST",
  body: JSON.stringify({ user: data }),
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(res => res.json())
  .then(res => {
    dispatch({
      type: SIGNUP,
      payload: res
    });
  });

export default SignUpAction;
