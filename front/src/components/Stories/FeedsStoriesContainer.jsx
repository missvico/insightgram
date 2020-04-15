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
  const { index, section, origin } = route.params;
  const feeds = allFeeds[section]
  const handleFeedChange = (moveFeed) => {
    let newIndex = index + moveFeed;

    if (section == "discover") {
      handleClose();
    } else {
      if (newIndex >= 0 && newIndex < feeds.length) {
        changeHasPendingStories();
        navigation.push("Stories",{origin, section, index: newIndex})
      } else {
        handleClose();
      }
    }
  };

  const handleClose = () => {
    changeHasPendingStories();
    updateFeedsUser(allFeeds);
    navigation.navigate(origin);
  };

  const changeHasPendingStories = () => {
    feeds[index].stories.filter(
      (story) => story.status == "not_seen"
    ).length == 0
      ? (feeds[index].has_pending_stories = false)
      : null;
  };

  return (
    <StoriesContainer
      handleClose={handleClose}
      handleFeedChange={handleFeedChange}
      feed={feeds[index]}
    />
  );
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
