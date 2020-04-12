import React, { useState, useEffect } from "react";
import StoriesContainer from "./StoriesContainer";
import { connect } from "react-redux";
import { updateFeedsUser } from "../../../redux/actions/feeds";

const FeedsStoriesContainer = ({
  route,
  navigation,
  feeds,
  updateFeedsUser,
}) => {
  console.log(route);

  const { id, section } = route.params;
  const feedSelected = feeds[section];
  const [feedIndex, setFeedIndex] = useState(
    searchFeedSelected(feedSelected, id)
  );
  const [currentFeed, setCurrentFeed] = useState(feedSelected[feedIndex]);

  const handleFeedChange = (moveFeed) => {
    let newIndex = feedIndex + moveFeed;

    if (section == "discover") {
      handleClose();
    } else {
      if (newIndex >= 0 && newIndex < feeds[section].length) {
        changeHasPendingStories();
        setCurrentFeed(feedSelected[newIndex]);
        setFeedIndex(newIndex);
      } else {
        handleClose();
      }
    }
  };

  const handleClose = () => {
    changeHasPendingStories();
    updateFeedsUser(feeds);
    navigation.pop();
  };

  const changeHasPendingStories = () => {
    feeds[section][feedIndex].stories.filter(
      (story) => story.status == "not_seen"
    ).length == 0
      ? (feedSelected[feedIndex].has_pending_stories = false)
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

const searchFeedSelected = (feedSelected, id) => {
  return feedSelected.findIndex((feed) => feed.id === id);
};

const mapStateToProps = (state, ownProps) => {
  return {
    feeds: state.feeds.homeUser.feeds,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateFeedsUser: (data) => dispatch(updateFeedsUser(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedsStoriesContainer);
