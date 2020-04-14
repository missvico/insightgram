import { combineReducers } from "redux";
import feeds from "./feedsReducer";
import play from "./playStoriesReducer";
import subscribe from "./subscribeReducer";
import loading from "./loadingReducer";

export default combineReducers({
  feeds,
  play,
  subscribe,
  loading,
});
