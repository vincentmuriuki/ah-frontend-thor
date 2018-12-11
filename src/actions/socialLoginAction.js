import { SOCIAL_LOGIN } from "./types";

const socialAction = (url, data) => 
  dispatch =>
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ access_token: data })
    })
      .then(res => res.json())
      .then(result => {
        dispatch({ type: SOCIAL_LOGIN, payload: result });
      });
export default socialAction;
