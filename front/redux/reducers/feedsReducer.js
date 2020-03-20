import { SET_FEEDS } from "../constants";
const initialState = {
  feeds: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FEEDS:
      return Object.assign({}, state, {
        feeds: action.feeds
      });
    default:
      return state;
  }
};
