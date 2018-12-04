import configureMockStore from 'redux-mock-store';
// import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

export default mockStore;