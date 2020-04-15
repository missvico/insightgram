import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Feeds from "./Feeds";
import {
  fetchAllFeeds,
  filterSubscribeFeeds,
} from "../../../redux/actions/feeds";
import { getItemStorage } from "../../../assets/js/AsyncStorage";

const FeedsContainer = (props) => {
  const [allFeeds, setAllFeeds] = useState({});
  const [filterAllFeeds, setFilterAllFeeds] = useState({});

  useEffect(() => {
    if (Object.keys(allFeeds).length == 0) {
      getItemStorage("@Token").then((token) =>
        props.fetchAllFeeds(token).then((feeds) => {
          setAllFeeds(feeds);
          setFilterAllFeeds(JSON.parse(JSON.stringify(feeds)));
        })
      );
    } else {
      return;
    }
  }, [setAllFeeds]);

  const handleSearch = (evt, target) => {
    if (target === "feeds") {
      let input = evt.nativeEvent.text;
      let searchFeeds = allFeeds.feeds;
      let searchFeeds2 = [];
      searchFeeds.forEach((group, index) => {
        let feedsFiltrados = group.feeds.filter((feed) =>
          feed.name.includes(input)
        );
        if (feedsFiltrados.length > 0) {
          searchFeeds2.push({ group: group.group, feeds: feedsFiltrados });
        }
      });
      let newFilter = Object.assign({}, filterAllFeeds, {
        ...(filterAllFeeds.feeds = searchFeeds2),
      });
      setFilterAllFeeds(newFilter);
      props.filterSubscribeFeeds(filterAllFeeds);
    }
  };

  const handlePress = () => {
    props.navigation.navigate("Home");
  };
  return (
    <Feeds
      feeds={filterAllFeeds ? filterAllFeeds.feeds : {}}
      handleSearch={handleSearch}
      handlePress={handlePress}
      handleTarget={"feeds"}
    />
  );
};
const mapStateToProps = function (state, ownProps) {
  return {};
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    fetchFeeds: (search) => dispatch(fetchFeeds(search)),
    fetchAllFeeds: (token) => dispatch(fetchAllFeeds(token)),
    filterSubscribeFeeds: (data) => dispatch(filterSubscribeFeeds(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedsContainer);
