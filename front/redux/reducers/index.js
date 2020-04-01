import { combineReducers } from "redux";
import feeds from "./feedsReducer";
import play from "./playStoriesReducer"

export default combineReducers({ 
    feeds, 
    play 
});
