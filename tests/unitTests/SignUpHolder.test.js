import { shallow } from "enzyme";
import React from "react";
import LayOut, {Input} from "../../src/components/Signup/SignUpHolder";


describe("Tests the mounted layout component", () => {
  it("tests the form component of the app", () => {
    const component = shallow(<LayOut />);
    expect(component).toMatchSnapshot();
  });
});


describe("Tests the mounted layout component", () => {
  it("tests the input component of the app", () => {
    const component = shallow(<Input />);
    expect(component).toMatchSnapshot();
  });
});
