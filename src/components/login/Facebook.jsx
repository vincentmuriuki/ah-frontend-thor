/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { FACEBOOK_APP_ID } from "../../../config";
import socialAuthAction from "../../actions/socialLoginAction";

const Facebook = props => {
  const { isLoggedIn, socialLogin, url } = props;
  return !isLoggedIn ? (
    <FacebookLogin
      appId={FACEBOOK_APP_ID}
      autoLoad={false}
      fields="name,email"
      render={renderProps => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <a className="btn-floating btn-fb btn-lg" onClick={renderProps.onClick}>
          <i className="fa fa-2x fa-facebook" />
        </a>
      )}
      callback={({ accessToken }) => socialLogin(url, accessToken)}
    />
  ) : null;
};

const mapStateToProps = ({ social }) => ({ isLoggedIn: social.isLoggedIn });

export const mapDispatchToProps = dispatch => ({
  socialLogin: (url, data) => dispatch(socialAuthAction(url, data))
});

Facebook.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  socialLogin: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired
};
export { Facebook };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Facebook);
