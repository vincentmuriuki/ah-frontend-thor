/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import GoogleLogin from "react-google-login";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { GOOGLE_APP_ID } from "../../../config";
import socialAction from "../../actions/socialLoginAction";

const Google = props => {
  const { isLoggedIn, socialLogin, user, url } = props;
  return !isLoggedIn ? (
    <GoogleLogin
      clientId={GOOGLE_APP_ID}
      render={renderProps => (
        <a className="btn-floating btn-tw btn-lg" onClick={renderProps.onClick}>
          <i className="fa fa-2x fa-google-plus" />
        </a>
      )}
      onSuccess={({ accessToken }) => socialLogin(url, accessToken)}
      onFailure={({ accessToken }) => socialLogin(url, accessToken)}
    />
  ) : (
    true
  );
};

const mapStateToProps = ({ social }) => ({
  isLoggedIn: social.isLoggedIn,
  user: social.user
});

export const mapDispatchToProps = dispatch => ({
  socialLogin: (url, data) => dispatch(socialAction(url, data))
});
export { Google };
Google.defaultProps = {
  user: null
};
Google.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  socialLogin: PropTypes.func.isRequired,
  user: PropTypes.shape({}),
  url: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Google);
