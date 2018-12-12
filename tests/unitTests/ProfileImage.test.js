import React from "react";
import { shallow } from "enzyme";
import { ProfileImage } from "../../src/components/ProfileImage";

it('test profile image html', () => {
  const username = "kalyango"
  const component = shallow(
    <ProfileImage fetchProfile={jest.fn()} username={username} />
  );
  expect(component).toMatchSnapshot();
});
