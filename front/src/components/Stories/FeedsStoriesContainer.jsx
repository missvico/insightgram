import React, { useState, useEffect } from "react";
import { Dimensions, Animated, StyleSheet, View } from "react-native";
import StoriesContainer from "./StoriesContainer";
import { connect } from "react-redux";
import { updateFeedsUser } from "../../../redux/actions/feeds";

const { width } = Dimensions.get("window");
const perspective = width;
const angle = Math.atan(perspective / (width / 2));
const ratio = Platform.OS === "ios" ? 2 : 1.2;

const FeedsStoriesContainer = ({
  route,
  navigation,
  feeds,
  updateFeedsUser,
}) => {
  const x = new Animated.Value(0);

  const { id, section } = route.params;
  const [index, setIndex] = useState(filterStories(feeds[section], id));
  const [currentFeed, setCurrentFeed] = useState(feeds[section][index]);

  const handleFeedChange = (n) => {
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

  const changeHasPendingStories = (inx) => {
    feeds[section][inx].stories.filter((story) => story.status == "not_seen")
      .length == 0
      ? (feeds[section][index].has_pending_stories = false)
      : null;
  };

  const getStyle = (index) => {
    const offset = index * width;

    const inputRange = [offset - width, offset + width];

    const translateX = x.interpolate({
      inputRange,
      outputRange: [width / ratio, -width / ratio],
      extrapolate: "clamp",
    });
    const rotateY = x.interpolate({
      inputRange,
      outputRange: [`${angle}rad`, `-${angle}rad`],
      extrapolate: "clamp",
    });

    const translateX1 = x.interpolate({
      inputRange,
      outputRange: [width / 2, -width / 2],
      extrapolate: "clamp",
    });

    const extra = width / ratio / Math.cos(angle / 2) - width / ratio;
    const translateX2 = x.interpolate({
      inputRange,
      outputRange: [-extra, extra],
      extrapolate: "clamp",
    });

    return {
      ...StyleSheet.absoluteFillObject,
      transform: [
        { perspective },
        { translateX },
        { rotateY },
        { translateX: translateX1 },
        { translateX: translateX2 },
      ],
    };
  };

  const getMaskStyle = (index) => {
    const offset = index * width;
    const inputRange = [offset - width, offset, offset + width];
    const opacity = x.interpolate({
      inputRange,
      outputRange: [0.75, 0, 0.75],
      extrapolate: "clamp",
    });
    return {
      backgroundColor: "black",
      ...StyleSheet.absoluteFillObject,
      opacity,
    };
  };

  const handlerScroll = (e) => {
    console.log("position", e.nativeEvent.contentOffset.x, "x", x);
    if (e.nativeEvent.contentOffset.x > x) {
      handleFeedChange(1);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={getStyle(index)} key={currentFeed.id}>
        <StoriesContainer
          feed={currentFeed}
          handleClose={handleClose}
          handleFeedChange={handleFeedChange}
        />
        <Animated.View style={getMaskStyle(index)} />
      </Animated.View>
      <Animated.ScrollView
        ref={this.scroll}
        style={StyleSheet.absoluteFillObject}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToInterval={width}
        contentContainerStyle={{ width: width * feeds[section].length }}
        onScroll={(e) => {
          Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { x },
                },
              },
            ],
            { useNativeDriver: true }
          );
          handlerScroll(e);
        }}
        decelerationRate={0.99}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

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

const filterStories = (feeds, feedId) => {
  return feeds.indexOf(feeds.filter((feed) => feed.id === feedId)[0]);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedsStoriesContainer);
