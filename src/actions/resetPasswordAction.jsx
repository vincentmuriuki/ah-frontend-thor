import toastr from "toastr";

export const updateError = message => {
  if (message == "Password updated") {
    toastr.success(message);
    setTimeout(() => window.location.replace("/signup"), 3000);
  } else if (message == "Token Expired. Update failed") {
    toastr.error(message);
    setTimeout(() => window.location.replace("/signup"), 3000);
  } else {
    toastr.error(message);
  }
  localStorage.removeItem("reset_token");
};

export const linkError = message => {
  if (message == "Check your email for the password reset link") {
    toastr.success(message);
  } else {
    toastr.error(message);
  }
  setTimeout(() => window.location.replace("/signup"), 3000);
};
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
      linkError(value.user.message);
    })
    .catch(error => {
      dispatch({ type: "JSON ERROR" });
      toastr.error("server error");
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
      dispatch({ type: "UPDATE SUCCESSFUL" });
      updateError(value.message);
    })
    .catch(error => {
      toastr.error("server error");
      error;
    });
};
