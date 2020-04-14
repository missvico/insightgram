import { SHOW_STORIES_HEADER } from "../constants";

const initialState = {
  showHeader: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_STORIES_HEADER:
      return { ...state, showHeader: action.value };
    default:
      return state;
  }
};