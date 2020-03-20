// import axios from "axios";
import { SET_FEEDS } from "../constants";

const setFeeds = feeds => ({
  type: SET_FEEDS,
  feeds
});

// export const fetchFeeds = s => dispatch => console.log("accion");
export const fetchFeeds = s => console.log(s);

// axios
//   .post(`/api/users/register`, user)
//   .then(data => data.data)
//   .then(user => dispatch(setUser(user)));
