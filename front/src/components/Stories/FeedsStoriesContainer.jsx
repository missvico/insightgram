import React, { useState } from "react";
import StoriesContainer from "./StoriesContainer";
import { connect } from "react-redux";
import { updateFeedsUser } from "../../../redux/actions/feeds";

const FeedsStoriesContainer = ({
  route,
  navigation,
  allFeeds,
  updateFeedsUser,
}) => {
  const { id, section } = route.params;
  const feeds = allFeeds[section];
  const [feedIndex, setFeedIndex] = useState(
    searchFeedSelected(feeds, id)
  );

  const handleFeedChange = (moveFeed) => {
    let newIndex = feedIndex + moveFeed;

    if (section == "discover") {
      handleClose();
    } else {
      if (newIndex >= 0 && newIndex < feeds.length) {
        changeHasPendingStories();
        setFeedIndex(newIndex);
      } else {
        handleClose();
      }
    }
  };

  const handleClose = () => {
    changeHasPendingStories();
    updateFeedsUser(allFeeds);
    navigation.pop();
  };

  const changeHasPendingStories = () => {
    feeds[feedIndex].stories.filter(
      (story) => story.status == "not_seen"
    ).length == 0
      ? (feeds[feedIndex].has_pending_stories = false)
      : null;
  };

  return (
    <StoriesContainer
      handleClose={handleClose}
      handleFeedChange={handleFeedChange}
      feed={feeds[feedIndex]}
    />
  );
};

const searchFeedSelected = (feedSelected, id) => {
  return feedSelected.findIndex((feed) => feed.id === id);
};

const mapStateToProps = (state, ownProps) => {
  return {
    allFeeds: state.feeds.homeUser.feeds,
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
