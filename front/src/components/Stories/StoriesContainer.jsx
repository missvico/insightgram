import React, { useState, useEffect, useRef } from "react";
import Story from "./Content/Story/Story";
import { View, Dimensions, Animated } from "react-native";
import HeaderContainer from "./Content/Header/HeaderContainer";
import { connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { currentStoryIndex } from "../../../redux/actions/feeds";
const StoriesContainer = ({ handleClose, feed, handleFeedChange, play }) => {
  const dispatch = useDispatch();
  const { stories, name } = feed;
  const [storyIndex, setStoryIndex] = useState(0);
  const [currentStory, setCurrentStory] = useState(stories[storyIndex]);

  useEffect(() => {
    setCurrentStory(stories[storyIndex]);
    dispatch(currentStoryIndex(storyIndex));
  }, [feed]);

  const handleStoryChange = (moveStory) => {
    let newIndex = storyIndex + moveStory;

    if (newIndex >= 0 && newIndex < stories.length) {
      changeStatus();
      setCurrentStory((value) => stories[newIndex]);
      setStoryIndex((value) => newIndex);
      dispatch(currentStoryIndex(newIndex));
    } else {
      setStoryIndex(0);
      dispatch(currentStoryIndex(0));
      handleFeedChange(moveStory);
    }
  };

  const changeStatus = () => {
    if (stories[storyIndex].status == "not_seen") {
      stories[storyIndex].status = "seen";
    }
  };

  useInterval(
    () => {
      handleStoryChange(1);
    },
    3000,
    play
  );

  return (
    <View flex={1}>
      <HeaderContainer
        style={{ position: "absolute" }}
        handleClose={handleClose}
        name={name}
        stories={stories}
      />
      <Story story={currentStory} handleStoryChange={handleStoryChange} />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    play: state.play.value,
  };
};

//FUNCION AUXILIAR:

function useInterval(callback, delay, isActive) {
  const savedCallback = useRef();
  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    let interval = null;
    if (isActive) {
      interval = setInterval(tick, delay);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, delay]);
}

export default connect(mapStateToProps, null)(StoriesContainer);
