import swal from "sweetalert2";
import { LOGIN, LOGIN_ERROR } from "./types";

export const loginUrl = "https://ah-backend-thor.herokuapp.com/api/users/login/";

export const alert=(username, token)=>{
  localStorage.setItem("token", token);
  localStorage.setItem("username", username);
  swal.showLoading();
  swal({
    type: "success",
    title: `Logging in as ${username}!`,
    showConfirmButton: false,
    timer: 3000,
  });
  window.location.replace("/");
};

export const runFetch =(dispatch, fetchObject)=> fetch(
  loginUrl,
  fetchObject
)
  .then(res => (
    res.json().then(data => {
      if (res.ok) {
        return Promise.resolve(data);
      }
      return Promise.reject(data);
    })
  ))
  .then(data=> {
    if ("user_token" in data.user) {
      dispatch({
        type:LOGIN,
        payload:data.user.user_token});
      alert(data.user.username, data.user.user_token);
    }})
  .catch( error => {
    dispatch({
      type:LOGIN_ERROR,
      payload:"errors" in error ? error.errors : JSON.stringify(error.detail)});
  });

const login = (loginData) => {

  const user = {
    user: loginData
  };

  const fetchObject = {
    method: "POST",
    headers: { "content-type": "application/json"},
    body: JSON.stringify(user)
  };
  return (dispatch)=>{
    runFetch(dispatch, fetchObject);

  };
};

export default login;