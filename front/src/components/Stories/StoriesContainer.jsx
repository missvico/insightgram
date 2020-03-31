import React, { useState, useEffect } from "react";
import Story from "./Content/Story/Story";

export default StoriesContainer = ({ feed, handleFeedChange }) => {
  const { stories } = feed;
  const [index, setIndex] = useState(0);
  const [storiesSeen, setStoriesSeen] = useState([]);

  const handleStoryChange = n => {
    changeStatus(index);
    if (index + n < 0 || index + n === stories.length) {
      setIndex(0);
      handleFeedChange(n);
    } else {
      setIndex(index + n);
    }
  };

  const changeStatus = inx => {
    stories[inx].status = "seen";
    storiesSeen.push(stories[inx].id);
    setStoriesSeen(storiesSeen);
  };

  return <Story story={stories[index]} handleStoryChange={handleStoryChange} />;
};
