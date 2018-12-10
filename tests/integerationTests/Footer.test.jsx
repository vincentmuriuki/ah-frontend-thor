import { shallow } from "enzyme";
import React from "react";
import Header from "../../src/components/Header";

describe("Tests the mounted header component", () => {
  it("tests the navbar of the app", () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
