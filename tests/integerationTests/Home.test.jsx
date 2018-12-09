import Enzyme, { shallow, mount } from "enzyme";
import React from "react";
import Home from "../../src/components/Home";

describe("Tests the mounted Footer component", () => {
  it("tests the footer of the app against the snapshot", () => {
    const component = mount(<Home />);
    expect(component).toMatchSnapshot();
  });
});
