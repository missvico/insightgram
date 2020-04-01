import React, { useState, useEffect } from "react";
import StoriesContainer from "./StoriesContainer";
import { connect } from "react-redux";
import { updateFeedsUser } from "../../../redux/actions/feeds";

const FeedsStoriesContainer = ({
  route,
  navigation,
  feeds,
  updateFeedsUser
}) => {
  const { id, section } = route.params;
  const [index, setIndex] = useState(filterStories(feeds[section], id));
  const [currentFeed, setCurrentFeed] = useState(feeds[section][index]);

  const handleFeedChange = n => {
    changeHasPendingStories(index);
    if (index + n < 0 || index + n === feeds[section].length) {
      handleClose();
    } else {
      setIndex(index + n);
      setCurrentFeed(feeds[section][index + n]);
    }
  };

  const handleClose = () => {
    changeHasPendingStories(index);
    updateFeedsUser(feeds);
    navigation.navigate("Home");
  };

  const changeHasPendingStories = inx => {
    feeds[section][inx].stories.filter(story => story.status == "not_seen")
      .length == 0
      ? (feeds[section][index].has_pending_stories = false)
      : null;
  };

  return (
    <StoriesContainer
      handleClose={handleClose}
      handleFeedChange={handleFeedChange}
      feed={currentFeed}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    feeds: state.feeds.homeUser.feeds
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateFeedsUser: data => dispatch(updateFeedsUser(data))
  };
};

const filterStories = (feeds, feedId) => {
  return feeds.indexOf(feeds.filter(feed => feed.id === feedId)[0]);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedsStoriesContainer);
