import { LOGIN_USER } from "../constants";
import axios from "axios";

const setUser = user => {
  return { type: LOGIN_USER, user };
};

export const loginUser = (email, password) => dispatch => {
  return axios
    .post(`http://localhost:3000/user/login`, {
      email: email,
      password: password
    })
    .then(response => {
      dispatch(setUser(response.data));
      return response;
    })
    .catch(err => err);
};
