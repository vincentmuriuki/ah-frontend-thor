import { shallow } from "enzyme";
import React from "react";
import Content from "../../src/components/Content";

describe("Tests the mounted Footer component", () => {
  it("tests the footer of the app against the snapshot", () => {
    const component = shallow(<Content />);
    expect(component).toMatchSnapshot();
  });
});
