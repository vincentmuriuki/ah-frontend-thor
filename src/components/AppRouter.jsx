import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";

import Root from "./Root";
import Content from "./Content";
import Home from "./Home";
import signUp from "./Signup/SignUp";
import store from "../store";

const AppRouter = () => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Root>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Content} />
            <Route path="/home" component={Home} />
            <Route path="/signup" component={signUp} />
          </div>
        </Root>
      </React.Fragment>
    </Router>
  </Provider>
);
export default AppRouter;
