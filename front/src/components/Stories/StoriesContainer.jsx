import React, { useState, useEffect, useRef } from "react";
import Story from "./Content/Story/Story";
import { View, Dimensions, Animated } from "react-native";
import HeaderContainer from "./Content/Header/HeaderContainer";
import { connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { currentStoryIndex } from "../../../redux/actions/feeds";
import {showStoriesHeader} from "../../../redux/actions/stories";
import { setPlay } from "../../../redux/actions/play";

const StoriesContainer = ({ handleClose, feed, handleFeedChange, play, setPlay, showStoriesHeader }) => {
  const dispatch = useDispatch();
  const { stories, name } = feed;
  const [storyIndex, setStoryIndex] = useState(0);
  const [currentStory, setCurrentStory] = useState(stories[storyIndex]);
  const [wasPlayed, setWasPlayed] = useState(false)

  useEffect(() => {
    setCurrentStory(stories[storyIndex]);
    dispatch(currentStoryIndex(storyIndex));
    changeStatus(storyIndex);
  }, [feed]);

  const handleStoryChange = (moveStory) => {
    let newIndex = storyIndex + moveStory;
    changeStatus(newIndex);
    if (newIndex >= 0 && newIndex < stories.length) {
      setCurrentStory((value) => stories[newIndex]);
      setStoryIndex((value) => newIndex);
      dispatch(currentStoryIndex(newIndex));
    } else {
      setStoryIndex(0);
      dispatch(currentStoryIndex(0));
      handleFeedChange(moveStory);
    }
  };

  const handleLongPress = () => {
    showStoriesHeader(false)
    if(play) {
      setWasPlayed(true)
      setPlay(!play)
    }
  }

  const handlePressOut = () => {
    showStoriesHeader(true)
    if(wasPlayed) {
      setWasPlayed(false)
      setPlay(!play)
    }
  }

  const changeStatus = (index) => {
    if (stories[index] && stories[index].status == "not_seen") {
      stories[index].status = "seen";
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
      <Story story={currentStory} handleStoryChange={handleStoryChange} handleLongPress={handleLongPress} handlePressOut={handlePressOut}/>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    play: state.play.value,
    showHeader: state.stories.showHeader
  };
};

function useInterval(callback, delay, isActive) {
  const savedCallback = useRef();
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

const mapDispatchToProps = (dispatch) => {
  return {
    showStoriesHeader: (value) => dispatch(showStoriesHeader(value)),
    setPlay: (value) => dispatch(setPlay(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoriesContainer);
