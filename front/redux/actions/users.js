import { LOGIN_USER } from "../constants";
import axios from "axios";
import { ip, loginUrl} from '../../config'

const setUser = token => {
  return { type: LOGIN_USER, token };
};

export const loginUser = (email, password) => dispatch => {
console.log(`${ip+loginUrl}`);
  return axios({
    method: 'POST',
    url: `http://${ip+loginUrl}`,
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
