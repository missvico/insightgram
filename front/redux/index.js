// import {
//     createStore,
//     applyMiddleware,
//     compose
// } from 'redux';
// import {
//     createLogger
// } from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';
// import reducer from './reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default createStore(reducer, composeEnhancers(applyMiddleware(createLogger(), thunkMiddleware)));

import { createStore, combineReducers } from "redux";
import feedsReducer from "./reducers/feedsReducer";
const rootReducer = combineReducers({ feedsReducer: feedsReducer });
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
