import React from "react";
import { mount, shallow } from "enzyme";

import { ForgotPasswordPage } from "../../src/containers/resetPassword/ForgotPasswordContainer";
import { ChangePasswordPage } from "../../src/containers/resetPassword/ChangePasswordContainer";

describe("When the form is submitted", () => {
  describe("<ForgotPasswordPage />", () => {
    test("renders the component", () => {
      const forgotPasswordComponent = shallow(
        <ForgotPasswordPage handleSubmit={jest.fn()} />
      );
      expect(forgotPasswordComponent).toMatchSnapshot();
    });

    test("renders the component", () => {
      const changePasswordComponent = shallow(
        <ChangePasswordPage handleSubmit={jest.fn()} />
      );
      expect(changePasswordComponent).toMatchSnapshot();
    });
  });
});
