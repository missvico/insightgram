import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Subscribe from "./Subscribe";
import { fetchAllFeeds, fetchFeedsByUser } from "../../../redux/actions/feeds";
import { getItemStorage } from "../../../assets/js/AsyncStorage";
import {
  subscribeFeeds,
  clearSubscribe,
} from "../../../redux/actions/subscribe";
import { setLoading } from "../../../redux/actions/loading";

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
    props.setLoading(true);
    subscribeFeeds(props.subscribe)
      .then(() => {
        getItemStorage("@Token").then((token) => {
          return props.fetchFeedsByUser(token);
        });
      })
      .then(() => {
        props.clearSubscribe();
        props.setLoading(false);
        props.navigation.navigate("Home");
      });
  };

  return (
    <Subscribe
      feeds={allFeeds ? allFeeds.feeds : {}}
      onChange={onChange}
      handlePress={handlePress}
      loading={props.loading}
    />
  );
};
const mapStateToProps = function (state, ownProps) {
  return {
    subscribe: state.subscribe,
    loading: state.loading,
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    fetchFeeds: (search) => dispatch(fetchFeeds(search)),
    fetchAllFeeds: (token) => dispatch(fetchAllFeeds(token)),
    fetchFeedsByUser: (token) => dispatch(fetchFeedsByUser(token)),
    clearSubscribe: () => dispatch(clearSubscribe()),
    setLoading: (value) => dispatch(setLoading(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubscribeContainer);
