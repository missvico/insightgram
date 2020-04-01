import { SET_FEEDS, SET_HOME_USER, UPDATE_HOME_DATA } from "../constants";
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
    case UPDATE_HOME_DATA: {
      return { ...state, homeUser: { ...state.homeUser, feeds: action.data } };
    }
    default:
      return state;
  }
};
