import signUpReducer from "../../src/reducers/signUpReducer";

const intialState = {
  item:{},
  success: false,
  loading: false,
};

describe(" INITIAL_STATE ", () => {
  test("is an empty object", () => {
    const action = {type:"NOTEXISTING"};
    expect(signUpReducer(undefined,action)).toEqual(intialState);
  });
});


describe(" REDUCER WITH DATA ", () => {
  test("return the correct object when called", () => {
    const action = {type:"SIGNUP_ACTION", payload:{username:"username",password:"password"}};
    expect(signUpReducer(undefined,action)) !== (intialState);
  });
});
