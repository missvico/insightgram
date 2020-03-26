import { LOGIN_USER } from "../constants";
import axios from "axios";
import { ip, loginUrl } from "../../config";
import { setItemStorage } from "../../assets/js/AsyncStorage";

const setUser = token => {
  return { type: LOGIN_USER, token };
};

export const loginUser = (email, password) => dispatch => {
  return axios({
    method: "POST",
    url: `http://${ip + loginUrl}`,
    data: {
      email: email,
      password: password
    }
  })
    .then(response => {
      setItemStorage("@Token:key", response.data);
      dispatch(setUser(response.data));
      return response.data;
    })
    .catch(error => error.response.status);
};
