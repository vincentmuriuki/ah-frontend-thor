/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

const Root = (props) =>{
  const {children} = props;
  return (
    <div>
      <Header />
      <div className="container">
        {children}
      </div>
      <Footer />
    </div>
  );
};

Root.defaultProps = {
  children: null
};
Root.propTypes = {
  children: PropTypes.element
};
export default Root;
