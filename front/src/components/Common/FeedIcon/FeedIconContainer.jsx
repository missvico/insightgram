import React, { useState } from "react";
import FeedIcon from "./FeedIcon";
import { addFeed } from "../../../../redux/actions/subscribe";
import { connect } from "react-redux";

const FeedIconContainer = ({
  feed,
  disableTick,
  handleStory,
  section,
  size,
  addFeed,
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

  return (
    <FeedIcon
      handlePress={
        disableTick ? () => handleStory({ id: feed.id, section }) : handlePress
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
  return { feedsToModify: state.subscribe.feedsToModify };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFeed: (feed_id, subs) => dispatch(addFeed(feed_id, subs)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedIconContainer);
