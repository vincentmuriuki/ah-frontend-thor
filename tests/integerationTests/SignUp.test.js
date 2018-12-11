import React from "react";
import { mount } from "enzyme";

import { SignUp, mapStateToProps } from "../../src/components/signup/SignUp";

describe("Renders the signup component without redux", () => {
  it("should render signUp component", () => {
    const wrapper = mount(<SignUp />);
    const message = {
      errors: {
        email: "email already taken"
      }
    };
    const state = {
      username: "user",
      email: "",
      password: "",
      confirmPassword: ""
    };

    wrapper.setState({ message, ...state });
    wrapper.setProps({
      signupAction: jest.fn(),
      item: {
        errors: { email: "Email already taken", username: "username already" }
      }
    });
    const fakeEvent = { preventDefault: () => {} };
    wrapper.instance().onFormSubmit(fakeEvent);
    const username = wrapper.find("#username");
    username.simulate("change");

    wrapper.setProps({
      signupAction: jest.fn(),
      item: {
        errors: { email: "Email already taken" }
      }
    });
    wrapper.instance().onFormSubmit(fakeEvent);

    wrapper.setProps({
      signupAction: jest.fn(),
      item: {
        errors: { username: "Username already taken" }
      }
    });
    wrapper.instance().onFormSubmit(fakeEvent);

    wrapper.setProps({
      signupAction: jest.fn(),
      item: {
        user: { message: "Username successfully registered" }
      }
    });
    wrapper.instance().onFormSubmit(fakeEvent);

    wrapper.setProps({
      signupAction: jest.fn(),
      item: {}
    });
    wrapper.instance().onFormSubmit(fakeEvent);

    const mewState = {
      username: "user",
      email: "",
      password: "",
      confirmPassword: "passsword"
    };
    wrapper.setState({ message, ...mewState });
    wrapper.instance().onFormSubmit(fakeEvent);
    expect(username.text()).toBe("");
    wrapper.find("#signupform").simulate("submit");
  });
});

describe("Checks whether mapstate to props returns", () => {
  const expectedProp = {
    signUpReducer: {
      item: { message: "user already registered" },
      loading: false,
      success: false
    }
  };

  expect(mapStateToProps(expectedProp)).toBeTruthy();
});
