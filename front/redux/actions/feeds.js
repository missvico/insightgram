// import axios from "axios";
import { SET_FEEDS, SET_HOME_USER } from "../constants";
import axios from "axios";
import { allFeedsUrl, ip, feedsUser } from "../../config";

const setFeeds = feeds => ({
  type: SET_FEEDS,
  feeds
});

const setHomeUser = data => ({
  type: SET_HOME_USER,
  data
});

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU4NDk5Mzk2OSwiZXhwIjoxNTg3NTg1OTY5fQ.u2tAW5yI-6NNv4s8uCw3OOOno9_EA1nFZ5hfnas_IYY";

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
    url: `http://${ip + feedsUser}`,
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
