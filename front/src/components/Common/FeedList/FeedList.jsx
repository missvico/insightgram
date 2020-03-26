import React from "react";
import { FlatList, View, Text } from "react-native";
import { Title, List } from "./style";
import FeedIconContainer from "../FeedIcon/FeedIconContainer";
import { compose } from "redux";
export default function FeedList({ feeds, title, disableTick }) {
  return (
    <View style={{ overFlow: "hidden" }}>
      <Title> {title}</Title>
      <List
        initialNumberToRender={20}
        windowSize={21}
        data={feeds}
        horizontal={true}
        getItemCount={data => data.length}
        getItem={(data, index) => data[index]}
        keyExtractor={(item, index) => item.id}
        renderItem={item => {
          console.log(item.item.has_pending_stories)
          return <FeedIconContainer
            isSuscribed={item.item.is_suscribed}
            hasPendingStories = {item.item.has_pending_stories}
            disableTick={disableTick}
          />
        }}

      />
    </View>
  );
}
