// import axios from "axios";
import { SET_FEEDS, SET_DISCOVER_FEEDS } from "../constants";
import axios from "axios";
import { allFeedsUrl, ip } from "../../config";

const setFeeds = feeds => ({
  type: SET_FEEDS,
  feeds
});

const setDiscoverFeeds = feeds => ({
  type: SET_DISCOVER_FEEDS,
  feeds
});

export const fetchAllFeeds = () => dispatch => {
  return axios({
    method: "GET",
    url: `http://${ip + allFeedsUrl}`,
    headers: {
      "Content-Type": "application/json",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU4NTAwMTMzNCwiZXhwIjoxNTg3NTkzMzM0fQ.lFwIWMJ3tP7mvREQMwKNHsjJOc38buUHHkb509Rfy6c"
    }
  })
    .then(response => response.data)
    .then(feeds => {
      dispatch(setFeeds(feeds));
      return feeds;
    })
    .catch(err => console.log(err));
};

export const fetchDiscoverFeeds = () => dispatch =>
  console.log("llegue a action discoverFeeds");

// axios
//   .get(``)
//   .then(data => data.data)
//   .then(feeds => dispatch(setDiscoverFeeds(feeds)));
