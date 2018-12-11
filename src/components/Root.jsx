/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Root =({children})=> (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);
export default Root;
