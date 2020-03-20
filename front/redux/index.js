import { createStore, combineReducers, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({ reducers });
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunkMiddleware));
};
export default configureStore;
