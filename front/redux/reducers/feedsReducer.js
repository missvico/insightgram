import { SET_FEEDS, SET_HOME_USER } from "../constants";
const initialState = {
  feeds: {},
  homeUser: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FEEDS:
      return { ...state, feeds: action.feeds };
    case SET_HOME_USER:
      return { ...state, homeUser: action.data };
    default:
      return state;
  }
};
