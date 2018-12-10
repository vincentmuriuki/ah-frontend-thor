import React, { Component } from "react";
import toastr from "toastr";
import { connect } from "react-redux";
import SignUpAction from "../../actions/signUpAction";
import LayOut from "./SignUpHolder";


toastr.options = {
  positionClass: "toast-top-center",
  preventDuplicates: true
};
export class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  showNotification = message => {
    if (Object.keys(message).length > 0) {
      if (message.errors !== undefined) {
        if (message.errors.email && message.errors.username) {
          toastr.warning("Username and Email are already taken ");
        } else if (message.errors.email) {
          toastr.warning("Email already taken");
        } else if (message.errors.username) {
          toastr.warning("Username already taken");
        }
      } else {
        toastr.success(
          "Successfully registered,Check your email to confirm account"
        );
      }
    } else {
    }
  };

  onFormSubmit = e => {
    e.preventDefault();
    const password = this.state.password;
    const confirmPassword = this.state.confirmPassword;

    if (password === confirmPassword) {
      this.props.signupAction(this.state);
      this.showNotification(this.props.item);
    } else {
      toastr.error("passwords don't match ");
    }
  };

  render() {
    return <LayOut onFormSubmit={this.onFormSubmit} onChange={this.onChange} />;
  }
}

export const mapStateToProps = state =>
  ({
    item: state.signUpReducer.item,
    success: state.signUpReducer.success
  });

const mapDispatchToProps = dispatch => ({
  signupAction: data => dispatch(SignUpAction(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
