import React from "react";
import expect from "expect";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import thunk from "redux-thunk";
import Home from "../../src/components/Home";

import { Google, mapDispatchToProps } from "../../src/components/login/Google";
import socialAction from "../../src/actions/socialLoginAction";
import { SOCIAL_LOGIN } from "../../src/actions/types";

describe("<Google />", () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialUserState = {
    social: {
      isLoggedIn: false,
      user: null,
      token: null
    }
  };
  const store = mockStore({ ...initialUserState });
  it("should render without crashing", () => {
    expect(
      mount.bind(
        null,
        <Google
          socialLogin={jest.fn()}
          url="google_url"
          isLoggedIn={false}
          store={store}
        />
      )
    ).not.toThrow();
  });
});

describe("Provider and Home", () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialUserState = {
    social: {
      isLoggedIn: false,
      user: null,
      token: null
    }
  };

  const store = mockStore({ ...initialUserState });
  const provider = shallow(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const home = shallow(<Home />);

  it("renders <Provider/> correctly", () => {
    expect(provider).toMatchSnapshot();
  });

  it("renders <Home/> correctly", () => {
    expect(home).toMatchSnapshot();
  });
  it("Google Button", () => {
    const wrapper = renderer.create(
      <Google
        socialLogin={jest.fn()}
        url="google_url"
        isLoggedIn={false}
        store={store}
      />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test("renders button", () => {
    const wrapper = shallow(
      <Google url="google_url" socialLogin={jest.fn()} isLoggedIn={false} />
    );
    const button = wrapper.prop("render")({ click: jest.fn() });
    expect(shallow(button).find("a.btn-floating").length).toEqual(1);
  });
  test("it triggers the social login actions", () => {
    const mock = jest.fn();
    const mapper = mapDispatchToProps(mock);
    mapper.socialLogin("google_url", {});
    expect(mock).toHaveBeenCalled();
  });
  test("Triggers  callback", () => {
    const onSuccess = jest.fn();
    const wrapper = shallow(
      <Google socialLogin={onSuccess} url="google_url" isLoggedIn={false} />
    );
    wrapper.prop("onSuccess")({ accessToken: "some access tokemn" });
    expect(onSuccess).toHaveBeenCalled();
  });

  const actions = store.getActions();
  expect(actions).toEqual([]);
});

describe("SocialLogin action creators", () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialUserState = {
    social: {
      isLoggedIn: false,
      user: null,
      token: null
    }
  };
  const store = mockStore({ ...initialUserState });
  afterEach(() => {
    fetchMock.restore();
  });

  it("authenticate user", () => {
    const data = { user: {} };
    fetchMock.post("https://ah-backend-thor.herokuapp.com/api/rest-auth/google/", data);

    const expectedActions = [{ type: SOCIAL_LOGIN, payload: data }];
    const url = "https://ah-backend-thor.herokuapp.com/api/rest-auth/google/";
    const accessToken = "saffsw3422555";

    return store.dispatch(socialAction(url, { accessToken })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
