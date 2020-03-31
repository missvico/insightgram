import React, { useState, useEffect } from "react";
import StoriesContainer from "./StoriesContainer";
import { connect } from "react-redux";

const FeedsStoriesContainer = ({ route, navigation, feeds }) => {
  const { id, section } = route.params;
  const [index, setIndex] = useState(filterStories(feeds[section], id));

  const handleFeedChange = n => {
    changeHasPendingStories(index);
    index + n < 0 || index + n === feeds[section].length
      ? navigation.navigate("Home")
      : setIndex(index + n);
  };

  const changeHasPendingStories = inx => {
    feeds[section][inx].stories.filter(story => story.status == "not_seen")
      .length == 0
      ? (feeds[section][inx].has_pending_stories = false)
      : null;
  };

  return (
    <StoriesContainer
      handleFeedChange={handleFeedChange}
      feed={feeds[section][index]}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    feeds: state.feeds.homeUser.feeds
  };
};

const filterStories = (feeds, feedId) => {
  return feeds.indexOf(feeds.filter(feed => feed.id === feedId)[0]);
};

export default connect(mapStateToProps, null)(FeedsStoriesContainer);
