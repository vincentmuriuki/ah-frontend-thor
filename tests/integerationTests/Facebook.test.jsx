import React from "react";
import expect from "expect";
import { shallow } from "enzyme";

import { Facebook, mapDispatchToProps } from "../../src/components/login/Facebook";

describe("<Facebook />", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(
      <Facebook socialLogin={jest.fn()} url="google_url" isLoggedIn={false} />
    );
    wrapper.simulate("click");
  });
});

describe("Provider and Home", () => {
 
  test("it triggers the social login actions", () => {
    const mock = jest.fn();
    const mapper = mapDispatchToProps(mock);
    mapper.socialLogin("facebook_url", {});
    expect(mock).toHaveBeenCalled();
  });
  test("Triggers  callback", () => {
    const callback = jest.fn();
    const wrapper = shallow(
      <Facebook socialLogin={callback} url="facebook_url" isLoggedIn={false} />
    );
    wrapper.prop("callback")({ accessToken: "some access tokemn" });
    expect(callback).toHaveBeenCalled();
  });

  test("renders button", () => {
    const wrapper = shallow(
      <Facebook url="facebook_url" socialLogin={jest.fn()} isLoggedIn={false} />
    );
    const button = wrapper.prop("render")({ click: jest.fn() });
    expect(shallow(button).find("a.btn-floating").length).toEqual(1);
  });
});
