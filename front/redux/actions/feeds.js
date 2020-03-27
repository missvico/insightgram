import { SET_FEEDS, SET_HOME_USER } from "../constants";
import axios from "axios";
import { allFeedsUrl, ip, feedsUserUrl } from "../../config";
import { getItemStorage } from "../../assets/js/AsyncStorage";

const setFeeds = feeds => ({
  type: SET_FEEDS,
  feeds
});

const setHomeUser = data => ({
  type: SET_HOME_USER,
  data
});

const token = getItemStorage("@Token");

export const fetchAllFeeds = () => dispatch => {
  console.log(token)
  return axios({
    method: "GET",
    url: `http://${ip + allFeedsUrl}`,
    headers: {
      "Content-Type": "application/json",
      token: token._55
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
      token: token._55
    }
  })
    .then(response => response.data)
    .then(userHome => {
      dispatch(setHomeUser(userHome));
      return userHome;
    })
    .catch(err => err);
};
