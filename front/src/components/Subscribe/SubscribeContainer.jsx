import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Subscribe from "./Subscribe";
import { fetchAllFeeds, fetchFeedsByUser } from "../../../redux/actions/feeds";
import { getItemStorage } from "../../../assets/js/AsyncStorage";
import {
  subscribeFeeds,
  clearSubscribe,
} from "../../../redux/actions/subscribe";

const SubscribeContainer = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [allFeeds, setAllFeeds] = useState({});

  useEffect(() => {
    if (Object.keys(allFeeds).length == 0) {
      getItemStorage("@Token").then((token) =>
        props.fetchAllFeeds(token).then((feeds) => setAllFeeds(feeds))
      );
    } else {
      return;
    }
  }, [setAllFeeds]);

  const onChange = (event) => {
    let search = event.nativeEvent.text;
    setInputValue(search);
  };

  const handlePress = () => {
    subscribeFeeds(props.subscribe)
      .then(() => {
        getItemStorage("@Token").then((token) => {
          return props.fetchFeedsByUser(token);
        });
      })
      .then(() => {
        props.clearSubscribe();
        props.navigation.navigate("Home");
      });
  };

  return (
    <Subscribe
      feeds={allFeeds ? allFeeds.feeds : {}}
      onChange={onChange}
      handlePress={handlePress}
    />
  );
};
const mapStateToProps = function (state, ownProps) {
  return {
    subscribe: state.subscribe,
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    fetchFeeds: (search) => dispatch(fetchFeeds(search)),
    fetchAllFeeds: (token) => dispatch(fetchAllFeeds(token)),
    fetchFeedsByUser: (token) => dispatch(fetchFeedsByUser(token)),
    clearSubscribe: () => dispatch(clearSubscribe()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubscribeContainer);
