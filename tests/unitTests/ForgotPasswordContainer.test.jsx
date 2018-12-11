import React from "react";
import { mount, shallow } from "enzyme";

import {
  ForgotPasswordPage,
  mapDispatchToProps
} from "../../src/containers/resetPassword/ForgotPasswordContainer";

describe("send link to email when user forgets password", () => {
  let wrapper;
  let mockForgotfn = jest.fn();
  const dispatch = jest.fn();
  beforeEach(() => {
    wrapper = mount(
      <ForgotPasswordPage
        resetEmail
        sendEmailLink={mockForgotfn}
        userEmail={jest.fn()}
      />
    );
  });

  it("handle user email inputs", () => {
    wrapper.find("form input").simulate("change", {
      target: { name: "email", value: "enmukungu@gmail.com" }
    });
    wrapper
      .find("form input")
      .simulate("change", { target: { name: "email", value: "" } });

    wrapper.find("form").simulate("submit");
  });
  it("handle email submission", () => {
    wrapper.find("FormLayout form").simulate("submit", {
      preventDefault() {}
    });
    expect(mockForgotfn.mock.calls.length).toBe(2);
  });

  it("should send an email link on submission", () => {
    mapDispatchToProps(dispatch).sendEmailLink();
    expect(dispatch.mock.calls.length).toBe(1);
  });
});
