import React, { useEffect, useRef, useState } from "react";

import { Animated, StyleSheet, View, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import Indicator from "./Indicator";
import { FlatList } from "react-native-gesture-handler";
import { StoryIndicator } from "./style";
import * as Progress from "react-native-progress";

const ProgressIndicator = ({ stories }) => {
  const opacity = useRef(new Animated.Value(1)).current;
  const windowWidth = Dimensions.get("window").width;
  const windowLength = Dimensions.get("window").length;

  const [times, setTimings] = useState(
    stories.reduce((acc, cur, index) => ({ ...acc, [index]: 0 }), {})
  );

  const currentIndex = useSelector(
    (state) => state.feeds.currentStoryIndex.currentStoryIndex
  );
  const stop = useSelector((state) => state.play.value);

  useEffect(() => {
    console.log(times);
    if (currentIndex === 0)
      setTimings(
        stories.reduce((acc, cur, index) => ({ ...acc, [index]: 0 }), {})
      );
    if (stop)
      for (let i = times[currentIndex]; i <= 2000; i++) {
        setTimings((prevState) => ({
          ...prevState,
          [currentIndex]: (i * 100) / 2000 / 100,
        }));
      }
  }, [currentIndex, stop, stories]);
  console.log(currentIndex);
  return (
    <View style={{ flexDirection: "row", padding: 1 }}>
      {stories.map((_, key) => (
        <View style={{ margin: 1 }}>
          <Progress.Bar
            color="#555"
            progress={times[key]}
            width={windowWidth / stories.length}
          />
        </View>
      ))}
    </View>

    // <FlatList
    //   horizontal
    //   data={stories}
    //   keyExtractor={(item, index) => index.toString()}
    //   renderItem={({ item, index }) => {
    //     return (
    //       <StoryIndicator
    //         currentIndex={currentIndex}
    //         index={index}
    //         scale={windowWidth / stories.length}
    //       />
    //     );
    //   }}
    // />
    // <Animated.View>
    //   {stories.map((i, index) => {
    //         return (
    //           <StoryIndicator currentIndex={currentIndex} index={index} scale={windowWidth/stories.length}/>
    //         );
    //   })}
    // </Animated.View>

    // <Animated.View style={[styles.progressBarArray, { opacity }]}>
    //   {stories.map((i, index) => {
    //     return (
    //       <Indicator
    //         index={index}
    //         duration={3000}
    //         currentIndex={index}
    //         length={stories.length}
    //         active={index === currentIndex ? 2 : index < currentIndex ? 1 : 0}
    //       />
    //     );
    //   })}
    // </Animated.View>
  );
};

const styles = StyleSheet.create({
  progressBarArray: {
    flexDirection: "row",
    position: "absolute",
    top: 30,
    width: "100%",
    height: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ProgressIndicator;
