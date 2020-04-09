import { combineReducers } from "redux";
import feeds from "./feedsReducer";
import play from "./playStoriesReducer";
import subscribe from "./subscribeReducer";

export default combineReducers({
  feeds,
  play,
  subscribe,
});
