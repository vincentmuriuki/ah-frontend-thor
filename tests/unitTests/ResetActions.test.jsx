import React from "react";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import {
  sendEmailLink,
  changePassword
} from "../../src/actions/resetPasswordAction";

const data = {
  new_password: "123456789000"
};
const token = "hyjtryuhghgfdfgh.gyhujkojhn.hyfvfdfg";
describe("resetPasswordActions", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("sends an emaillink when fetch is successful", () => {
    const data = {
      user: { email: "enmukungu@gmail.com" }
    };
    fetchMock.post(
      "https://ah-backend-thor.herokuapp.com/api/users/password_reset/",
      data,
      201
    );

    const expectedActions = [{ type: "LINK SENT" }];
    const store = mockStore({});

    return store
      .dispatch(sendEmailLink(data))
      .then(() =>
        expect(store.getActions()).toEqual(
          expect.objectContaining(expectedActions)
        )
      );
  });

  it("json errors", () => {
    const data = "user";

    fetchMock.post(
      "https://ah-backend-thor.herokuapp.com/api/users/password_reset/",
      data
    );

    const expectedActions = [{ type: "JSON ERROR" }];
    const store = mockStore({});

    return store
      .dispatch(sendEmailLink(data))
      .then(() =>
        expect(store.getActions()).toEqual(
          expect.objectContaining(expectedActions)
        )
      );
  });

  it("update password when fetch is successful", () => {
    fetchMock.put(
      `https://ah-backend-thor.herokuapp.com/api/users/update_password/${token}`,
      (token, data),
      201
    );

    const expectedActions = [{ type: "API ACCESS SUCCESSFUL" }];
    const store = mockStore({});

    return store
      .dispatch(changePassword(token, data))
      .then(() =>
        expect(store.getActions()).toEqual(
          expect.objectContaining(expectedActions)
        )
      );
  });

  it("updating the password fails", () => {
    fetch.mockReject(new Error("server error"));
    const store = mockStore();

    store.dispatch(changePassword(token, data));
    expect(store.getActions()).toEqual([]);
  });
});
