import React from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  FlatList
} from "react-native";
import { Title } from "./style";

import FeedIconContainer from "../Common/FeedIcon/FeedIconContainer";
export default ({ feeds , handleStory}) => {
  return (
    <View>
      <Title>Discover</Title>
      <ScrollView>
        <SafeAreaView>
          <FlatList
            style={{ marginLeft: 10, marginBottom: 10 }}
            numColumns={3}
            data={feeds}
            keyExtractor={item => item.id}
            renderItem={( feed ) => {
            return <FeedIconContainer hasPendingStories={feed.item.has_pending_stories} disableTick={true} thumbnail={feed.item.thumbnail} name={feed.item.name} handleStory={handleStory}/>
          }}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};
