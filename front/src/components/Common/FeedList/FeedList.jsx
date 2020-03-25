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
<<<<<<< HEAD
            isSuscribed={item.is_suscribed}
=======
            isSuscribed={item.is_suscribed ? item.is_suscribed : false}
>>>>>>> 52fc2e936ede957a51806b3af481f2a998fed668
          />
        )}
      />
    </View>
  );
}
