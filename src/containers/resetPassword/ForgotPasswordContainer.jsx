import React, { Component } from "react";
import { connect } from "react-redux";

import { sendEmailLink } from "../../actions/resetPasswordAction";
import FormLayout from "../../components/resetPassword/FormLayout";

export class ForgotPasswordPage extends Component {
  state = { email: "" };
  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleSubmitEmail = event => {
    event.preventDefault();
    const { email } = this.state;
    const data = { user: { email: email } };
    this.props.sendEmailLink(data);
  };

  render() {
    return (
      <FormLayout
        title="Reset Password Link"
        handleSubmit={this.handleSubmitEmail}
        handleChange={this.handleChangeEmail}
        type="email"
        id="materialLoginFormEmail"
        placeholder="Email"
        name="email"
        innerHTML="RESET"
      />
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  sendEmailLink: data => dispatch(sendEmailLink(data))
});

export default connect(
  null,
  mapDispatchToProps
)(ForgotPasswordPage);
