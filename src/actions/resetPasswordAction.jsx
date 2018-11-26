import toastr from "toastr";
export const sendEmailLink = data => dispatch => {
  /*Sends a pasword reset link*/
  return fetch(
    "https://ah-backend-thor.herokuapp.com/api/users/password_reset/",
    {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }
  )
    .then(response => {
      return response.json();
    })
    .then(value => {
      dispatch({ type: "LINK SENT", payload: value.user.message });
      localStorage.setItem("reset_token", value.user.token);
      toastr.info(value.user.message);
      setTimeout(() => window.location.replace("/"), 3000);
    })
    .catch(error => {
      dispatch({ type: "JSON ERROR" });
      error;
    });
};

export const changePassword = (token, data) => dispatch => {
  /*Sens a pasword reset link*/
  return fetch(
    `https://ah-backend-thor.herokuapp.com/api/users/update_password/${token}`,
    {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }
  )
    .then(response => {
      return response.json();
    })
    .then(value => {
      dispatch({ type: "API ACCESS SUCCESSFUL" });
      toastr.info(value.message);
      localStorage.removeItem("reset_token");
      setTimeout(() => window.location.replace("/"), 3000);
    })
    .catch(error => {
      error;
    });
};
