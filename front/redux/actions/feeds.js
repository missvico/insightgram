// // import axios from "axios";
// import { SET_FEEDS } from "../constants";
// import axios from 'axios'
// import { allFeedsUrl, ip } from '../../config'

// const setFeeds = feeds => ({
//   type: SET_FEEDS,
//   feeds
// });

// export const fetchAllFeeds = () => dispatch => {
//   return axios({
//     method: 'GET',
//     url: `http://${ip+allFeedsUrl}`,
//     headers: {
//       'Content-Type': 'application/json',
//       'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU4NDk4NTg3MSwiZXhwIjoxNTg3NTc3ODcxfQ.3ZRUgFsSaamu15tiz178WHQunHjAOc9ZaSU1I9SlXYc'
//     }
//   })
//   .then(response => response.data)
//   .then(feeds => {
//     dispatch(setFeeds(feeds))
//     return feeds
//   })
//   .catch(err => console.log(err))
// }
