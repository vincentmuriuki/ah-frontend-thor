import React, { Component } from "react";
import { connect } from "react-redux";
import swal from "sweetalert2";

import {
  userPassword,
  changePassword
} from "../../actions/resetPasswordAction";
import FormLayout from "../../components/resetPassword/FormLayout";

export class ChangePasswordPage extends Component {
  state = { password1: "" };
  handleChangePassword = event => {
    this.setState({ password1: event.target.value });
  };

  handleSubmitPassword = event => {
    event.preventDefault();
    const token = localStorage.getItem("reset_token");
    const { password1 } = this.state;
    const data = { new_password: password1 };
    this.props.changePassword(token, data);
  };

  render() {
    return (
      <div>
        <FormLayout
          title="Change Password"
          handleSubmit={this.handleSubmitPassword}
          handleChange={this.handleChangePassword}
          type="password"
          id="materialLoginFormPassword1"
          placeholder="New Password"
          name="password"
          innerHTML="SUBMIT"
        />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  changePassword: (token, data) => dispatch(changePassword(token, data))
});

export default connect(
  null,
  mapDispatchToProps
)(ChangePasswordPage);
