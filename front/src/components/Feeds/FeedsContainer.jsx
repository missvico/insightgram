import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Feeds from "./Feeds";
import { fetchAllFeeds } from "../../../redux/actions/feeds";
import { getItemStorage } from "../../../assets/js/AsyncStorage";

const FeedsContainer = props => {
  const [inputValue, setInputValue] = useState("");
  const [allFeeds, setAllFeeds] = useState({});

  useEffect(() => {
    if (Object.keys(allFeeds).length == 0) {
      getItemStorage("@Token").then(token =>
        props.fetchAllFeeds(token).then(feeds => setAllFeeds(feeds))
      );
    } else {
      return;
    }
  }, [setAllFeeds]);

  const onChange = event => {
    let search = event.nativeEvent.text;
    setInputValue(search);
  };

  const handlePress = () => {
    props.navigation.navigate("Home");
  };
  return (
    <Feeds
      feeds={allFeeds ? allFeeds.feeds : {}}
      onChange={onChange}
      handlePress={handlePress}
    />
  );
};
const mapStateToProps = function(state, ownProps) {
  return {};
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    fetchFeeds: search => dispatch(fetchFeeds(search)),
    fetchAllFeeds: token => dispatch(fetchAllFeeds(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedsContainer);
