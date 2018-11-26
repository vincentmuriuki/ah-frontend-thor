/* eslint-disable import/no-extraneous-dependencies */
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";
import SignUpAction from "../../src/actions/signUpAction";
import { SIGNUP } from "../../src/actions/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const REGISTER_URL = "https://ah-backend-thor.herokuapp.com/api/users/";

const data = {
  user: {
    username: "chuck",
    email: "chucky@gmail.com",
    password: "password"
  }
};

describe(" sigup actions ", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("registers a user by call the SignUpAction", () => {
    fetchMock.post(REGISTER_URL, data);
    const store = mockStore({ item: {} });
    const expectedAction = [{ type: SIGNUP, payload: data }];
    return store
      .dispatch(SignUpAction(data))
      .then(() => expect(store.getActions()).toEqual(expectedAction));
  });
});
