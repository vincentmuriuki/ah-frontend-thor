/* eslint-disable import/no-extraneous-dependencies */
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";
import login, {alert} from "../src/actions/loginActions";
import * as store_ from "../src/store";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const loginUrl = "https://ah-backend-thor.herokuapp.com/api/users/login/";

const dataObject= {
  data: {
    user: {
      email: "chucky@gmail.com",
      password: "password",
      "user_token": "fhdhhjjhfx"
    },

  }};

describe(" sigup actions ", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("logins in user with login action", () => {
    fetchMock.post(loginUrl, dataObject.data);
    const store = mockStore({ item: {} });
    store.dispatch(login(dataObject.data));
    expect(store.getActions()).toEqual([]);

  });

  it("logins in user with login action", () => {
    fetch.mockReject(new Error("fake error message"));
    const store = mockStore({ item: {} });

    store.dispatch(login(dataObject.data));
    expect(store.getActions()).toEqual([]);

  });
});


describe("test swal alert", ()=>{
  it ("teststhe pop up notification", () => {
    alert("cedric","random token");
  });
});

describe("test", ()=>{
  it ("tests the store", () => {
    expect(store_).toBeTruthy();
  });
});
