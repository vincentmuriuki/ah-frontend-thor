import React from "react";
import { mount } from "enzyme";

import {
  ChangePasswordPage,
  mapDispatchToProps
} from "../../src/containers/resetPassword/ChangePasswordContainer";

describe("update user password", () => {
  let wrapperChange;
  let mockChangefn = jest.fn();
  const dispatch = jest.fn();
  beforeEach(() => {
    wrapperChange = mount(
      <ChangePasswordPage
        resetPassword
        changePassword={mockChangefn}
        userPassword={jest.fn()}
      />
    );
  });
  it("should call the mock change function", () => {
    wrapperChange.find("form").simulate("submit", {
      preventDefault() {}
    });
    expect(mockChangefn.mock.calls.length).toBe(1);
  });
  it("handle user password inputs", () => {
    wrapperChange.find("input#materialLoginFormPassword1").simulate("change", {
      target: { name: "password", value: "1234567890" }
    });
    wrapperChange
      .find("input#materialLoginFormPassword1")
      .simulate("change", { target: { name: "password", value: "" } });

    wrapperChange.find("form").simulate("submit");
  });
  it("should update password on submission", () => {
    mapDispatchToProps(dispatch).changePassword();
    expect(dispatch.mock.calls.length).toBe(1);
  });
});
