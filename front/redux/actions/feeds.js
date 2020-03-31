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

export const fetchAllFeeds = token => dispatch => {
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
    .catch(error => error.response.status);
};

export const fetchFeedsByUser = token => dispatch => {
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
    .catch(error => error.response.status);
};
