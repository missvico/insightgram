import { SHOW_STORIES_HEADER, SET_PENDING_STORY, SET_SEEN_STORY} from "../constants";

const initialState = {
  showHeader: true,
  pendingStories: {},
  currentFeedIndex: -1,
  seenStories: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_STORIES_HEADER:
      return { ...state, showHeader: action.value };
    case SET_PENDING_STORY:
      return {...state, pendingStories: {...state.pendingStories, ...action.data}}
    case SET_SEEN_STORY: {
        return { ...state, seenStories: {
          ...state.seenStories,
          ...action.story,
        }};
      }
    default:
      return state;
  }
};