import { SET_FEEDS, SET_DISCOVER_FEEDS } from "../constants";
const initialState = {
  feeds: {},
  discoverFeeds: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FEEDS:
      return { ...state, feeds: action.feeds };
    case SET_DISCOVER_FEEDS:
      return { ...state, feeds: action.discoverFeeds };
    default:
      return state;
  }
};
