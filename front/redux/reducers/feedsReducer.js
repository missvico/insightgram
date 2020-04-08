import { SET_FEEDS, SET_HOME_USER, UPDATE_HOME_DATA } from "../constants";
const initialState = {
  feeds: {},
  homeUser: {},
  currentStoryIndex: 0,
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
    case "UPDATE_STORY_INDEX": {
      return {
        ...state,
        currentStoryIndex: {
          ...state.currentStoryIndex,
          currentStoryIndex: action.data,
        },
      };
    }
    default:
      return state;
  }
};
