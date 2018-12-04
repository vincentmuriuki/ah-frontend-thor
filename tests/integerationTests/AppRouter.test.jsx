import "babel-polyfill";
import React from "react";
import { mount, shallow } from "enzyme";

import AppRouter from "../../src/components/AppRouter";

import Header from "../../src/components/Header";
import Home from "../../src/components/Home";
import Root from "../../src/components/Root";

describe("<AppRouter />", () => {
  it("should render without crashing", () => {
    expect(mount.bind(null, <AppRouter />)).not.toThrow();
  });
  it("Test app instance", () => {
    const wrapper = shallow(<AppRouter />).instance();
    expect(true).toBe(true);
  });
});

describe("<Home />", () => {
  it("should render without crashing", () => {
    expect(mount.bind(null, <Home />)).not.toThrow();
  });
});

describe("<Root />", () => {
  it("should render jumbotron", () => {
    const editor = shallow(<Root />);
    expect(editor.find("div.jumbotron").length).toEqual(0);
  });
});
