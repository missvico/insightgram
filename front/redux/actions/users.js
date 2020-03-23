import { LOGIN_USER } from "../constants";
import axios from "axios";

const setUser = token => {
  return { type: LOGIN_USER, token };
};

export const loginUser = (email, password) => dispatch => {

  return axios({
    method: 'POST',
    url: "http://192.168.0.10:3000/user/login",
    data: {
      email: email,
      password: password
    }
    }).then(response => {
        dispatch(setUser(response.data));
        return response.data
      })
      .catch(error => {
        console.error("Error:", error);
      });
};
