import { SET_FEEDS, SET_HOME_USER } from "../constants";
import axios from "axios";
import { allFeedsUrl, ip, feedsUserUrl } from "../../config";

const setFeeds = feeds => ({
  type: SET_FEEDS,
  feeds
});

const setHomeUser = data => ({
  type: SET_HOME_USER,
  data
});

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU4NTA5ODk0NywiZXhwIjoxNTg3NjkwOTQ3fQ.zAQMKqYgP927yjHA7f2qZtvPMphECy8RKKviTgfC0eU";

export const fetchAllFeeds = () => dispatch => {
  return axios({
    method: "GET",
    url: `http://${ip + allFeedsUrl}`,
    headers: {
      "Content-Type": "application/json",
      token: token
    }
  })
    .then(response => response.data)
    .then(feeds => {
      dispatch(setFeeds(feeds));
      return feeds;
    })
    .catch(err => console.log(err));
};

export const fetchFeedsByUser = () => dispatch => {
  return axios({
    method: "GET",
    url: `http://${ip + feedsUserUrl}`,
    headers: {
      "Content-Type": "application/json",
      token: token
    }
  })
    .then(response => response.data)
    .then(userHome => {
      dispatch(setHomeUser(userHome));
      return userHome;
    })
    .catch(err => err);
};
