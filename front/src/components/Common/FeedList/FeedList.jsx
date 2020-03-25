import React from "react";
import { FlatList, View, Text, VirtualizedList } from "react-native";
import { Title } from "./style";
import FeedIconContainer from "../FeedIcon/FeedIconContainer";
import { compose } from "redux";
export default function FeedList({ feeds, title }) {
  return (
    <View style={{ overFlow: "hidden" }}>
      <Title> {title}</Title>
      <VirtualizedList
        initialNumberToRender={20}
        windowSize={21}
        data={feeds}
        horizontal={true}
        getItemCount={data => data.length}
        getItem={(data, index) => data[index]}
        keyExtractor={(item, index) => item.id}
        renderItem={item => (
          <FeedIconContainer
            isSuscribed={item.is_suscribed}
          />
        )}
      />
    </View>
  );
}
