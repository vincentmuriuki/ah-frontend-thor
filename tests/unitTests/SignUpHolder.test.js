import { shallow } from "enzyme";
import React from "react";
import LayOut, {Input} from "../../src/components/signup/SignUpHolder";
import {mapDispatchToProps} from "../../src/components/signup/SignUp";
// import SignUpAction from "../../src/actions/signUpAction";


describe("Tests the mounted layout component", () => {
  it("tests the form component of the app", () => {
    const component = shallow(<LayOut />);
    expect(component).toMatchSnapshot();
  });
});


describe("Tests the mounted layout component", () => {
  it("tests the input component of the app", () => {
    const component = shallow(<Input />);
    expect(component).toMatchSnapshot();
  });
});

describe("Signup", () => {

  it("Should pass action to props on submit", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).signupAction({username:"cdvx@", password:"hgjfjv"});
    expect((dispatch.mock.calls[0][0])).toBeTruthy();
  });
});
