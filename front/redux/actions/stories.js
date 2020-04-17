import {SHOW_STORIES_HEADER, SET_PENDING_STORY, SET_SEEN_STORY} from "../constants"
import axios from "axios"

export const showStoriesHeader = value => ({
    type: SHOW_STORIES_HEADER,
    value
  });

export const setPendingStories = (feedId, storyIndex) => ({
  type: SET_PENDING_STORY,
  data: {
    [feedId]: storyIndex
  }
})
  
export const setSeenStory = (storyId) => ({
  type: SET_SEEN_STORY,
  story: {
    [storyId]: true
  }
})

export const sendSeenStories = (storiesObject) => {
  const storiesArray = transformObject(storiesObject)
  console.log("ARRAY", storiesArray)
  axios({
    method: "POST",
    url: "http://ec2-18-223-211-135.us-east-2.compute.amazonaws.com:8080/user/stories/seen",
    data: {
      ids: storiesArray,
    }
  }).then(info => console.log(info))
}

const transformObject = (stories) => {
  let arr = [];
  for (let key in stories) {
    if (stories[key]) arr.push(key);
  }
  return arr;
};
