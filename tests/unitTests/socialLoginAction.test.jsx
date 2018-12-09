import expect from "expect";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import socialAction  from "../../src/actions/socialLoginAction";
import { SOCIAL_LOGIN} from "../../src/actions/types";


describe("SocialLogin action creators", () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialUserState ={ social: {
    isLoggedIn: false,
    user: null,
    token: null
  }};
  const store = mockStore({...initialUserState});
  afterEach(() => {
    // eslint-disable-next-line no-undef
    fetchMock.restore();
  });

  it("authenticate user", () => {
    const data = { user: {} };
    // eslint-disable-next-line no-undef
    fetchMock.post("https://ah-backend-thor.herokuapp.com/api/rest-auth/google/", data);

    const expectedActions = [{ type: SOCIAL_LOGIN, payload: data }];
    const url = "https://ah-backend-thor.herokuapp.com/api/rest-auth/google/";
    const accessToken = "tokentokensecret";

    return store.dispatch(socialAction(url, { accessToken })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
