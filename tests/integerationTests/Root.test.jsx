import Enzyme, { shallow, mount } from "enzyme";
import React from "react";
import Root from "../../src/components/Root";

describe("Tests the mounted Footer component", () => {
  it("tests the footer of the app against the snapshot", () => {
    const component = shallow(<Root />);
    expect(component).toMatchSnapshot();
  });
});
