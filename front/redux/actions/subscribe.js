import { SUBSCRIBE_FEED, CLEAR_SUBSCRIBE } from "../constants";
import axios from "axios";
import { ip, allFeedsUrl } from "../../config";
import Promise from "bluebird";

export const addFeed = (feedId, subs) => ({
  type: SUBSCRIBE_FEED,
  feed: {
    [feedId]: subs,
  },
});

export const clearSubscribe = () => ({
  type: CLEAR_SUBSCRIBE,
});

export const subscribeFeeds = (feeds) => {
  let feedsToSubscribe = filterFeeds(feeds, "subscribe");
  let feedsToUnsubscribe = filterFeeds(feeds, "unsubscribe");
  let subscribedFeeds = axios({
    method: "PUT",
    url: "http://ec2-18-223-211-135.us-east-2.compute.amazonaws.com:8080/user/feeds",
    data: {
      ids: feedsToSubscribe,
    }
  });
  let unsubscribedFeeds = axios.delete(`http://ec2-18-223-211-135.us-east-2.compute.amazonaws.com:8080/user/feeds`, {
  data: {
      ids: feedsToUnsubscribe,
    },
  });
  return Promise.props({ subscribedFeeds, unsubscribedFeeds }).then(
    ({ subscribedFeeds, unsubscribedFeeds }) => {
      console.log(subscribedFeeds.data.info)
      return {
        subscribedFeeds: subscribedFeeds.data.info,
        unsubscribedFeeds: unsubscribedFeeds.data.info,
      };

    }
  ).catch(err => console.log("Hubo error"))
};

const filterFeeds = (feeds, string) => {
  let arr = [];
  for (let key in feeds) {
    if (feeds[key] === string) arr.push(key);
  }
  return arr;
};
