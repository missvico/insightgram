import React from "react";
import { FlatList, View, Text, SafeAreaView } from "react-native";
import {Title} from "./style"
import FeedIconContainer from "../FeedIcon/FeedIconContainer";
export default function FeedList({ feeds, title }) {
  return (
    <View>
    <Title > {title}</Title>
     <SafeAreaView>
      <FlatList
        data={feeds}
        horizontal={true}
        renderItem={item => <FeedIconContainer isSuscribed={item.is_suscribed}/>}
      />
     </SafeAreaView>
    </View>
  );
}