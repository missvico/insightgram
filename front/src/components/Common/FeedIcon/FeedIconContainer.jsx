import React, { useState } from "react";
import FeedIcon from "./FeedIcon";
import { addFeed } from "../../../../redux/actions/subscribe";
import {setCurrentFeedId} from "../../../../redux/actions/feeds";
import { connect } from "react-redux";


const FeedIconContainer = ({
  feed,
  disableTick,
  handleStory,
  section,
  size,
  addFeed,
  userFeeds,
  setCurrentFeedId
}) => {
  const [selected, setSelected] = useState(feed.is_suscribed);

  const handlePress = () => {
    setSelected(!selected);
    let subs;
    if (feed.is_suscribed) {
      subs = selected ? "unsubscribe" : false;
    } else {
      subs = selected ? false : "subscribe";
    }
    addFeed(feed.id, subs);
  };

  const handleOpenStory = () => {
    setCurrentFeedId(feed.id)
    handleStory({ index: getFeedIndex(userFeeds[section], feed.id), section, startStory: 0})
  }

  return (
    <FeedIcon
      handlePress={
        disableTick ? handleOpenStory : handlePress
      }
      tick={selected}
      name={feed.name}
      hasPendingStories={feed.has_pending_stories}
      thumbnail={feed.thumbnail}
      preview={disableTick ? feed.stories[0].thumbnail : null}
      disableTick={disableTick}
      size={size}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    feedsToModify: state.subscribe.feedsToModify,
    userFeeds: state.feeds.homeUser.feeds
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFeed: (feed_id, subs) => dispatch(addFeed(feed_id, subs)),
    setCurrentFeedId: (feedId) => dispatch(setCurrentFeedId(feedId))
  };
};

const getFeedIndex = (feeds, id) => {
  return feeds.findIndex((feed) => feed.id === id);
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedIconContainer);
