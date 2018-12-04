import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  EDIT_PROFILE,
  SAVE_IMAGE
} from "./types";

export const editProfile = profileData => dispatch => {
  const token = localStorage.getItem("token");
  return fetch("https://ah-backend-thor.herokuapp.com/api/user/", {
    method: "PUT",
    body: JSON.stringify({ user: profileData }),
    headers: {
      "content-type": "application/json",
      Authorization: `Token ${token}`
    }
  })
    .then(res => res.json())
    .then(newprofile => {
      dispatch({
        type: EDIT_PROFILE,
        payload: newprofile
      });
    });
};
export const saveImage = (formData) => dispatch => {
  const CLOUDNARY_URL = process.env.CLOUDNARY_URL;
  return fetch(CLOUDNARY_URL, {
    method: "POST",
    body: formData
  })
    .then(res => res.json())
    .then(response => {
      dispatch({
        type: SAVE_IMAGE,
        payload: response.secure_url
      });
    });
};

export function fetchProfileRequest() {
  return {
    type: FETCH_PROFILE_REQUEST
  };
}

export function fetchProfileSuccess(user) {
  return {
    type: FETCH_PROFILE_SUCCESS,
    payload: user
  };
}

export const fetchProfile = () => dispatch => {
  dispatch(fetchProfileRequest());
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  return fetch(
    `https://ah-backend-thor.herokuapp.com/api/profiles/${username}`,
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Token ${token}`
      }
    }
  )
    .then(res => res.json())
    .then(profile => {
      dispatch(fetchProfileSuccess(profile.profile.user));
    });
};

export default fetchProfile;
