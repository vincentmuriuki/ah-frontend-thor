import social from "../../src/reducers/socialReducer";
import { SOCIAL_LOGIN } from "../../src/actions/types";

describe("socialLoginReducer", () => {
  it("has a default state", () => {
    expect(social(undefined, { type: "unexpected" })).toEqual({
      isLoggedIn: false,
      user: null,
      token: null
    });
  });

  it("updates state on SOCIAL_LOGIN action type", () => {
    expect(
      social(undefined, {
        type: SOCIAL_LOGIN,
        payload: { token: "nkfknfldfl" }
      })
    ).toEqual({
      isLoggedIn: true,
      user: undefined,
      token: "nkfknfldfl"
    });
  });
});
