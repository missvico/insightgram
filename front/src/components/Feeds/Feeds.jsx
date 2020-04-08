import React from "react";
import { Text, View, ScrollView, SafeAreaView, FlatList } from "react-native";
import { Search, Done, ButtonText } from "./style";
import FeedList from "../Common/FeedList/FeedList";
import AllFeedsToggle from "../Subscribe/AllFeedsToggle";
import ToggleTab from "../Subscribe/ToggleTab";
import Navigation from "../Subscribe/Navigation";

export default ({ onChange, inputValue, feeds, handlePress }) => {
  return (
    <View style={{ flex: 1 }}>
      <Search
        placeholder="Search"
        onChange={(e) => onChange(e)}
        value={inputValue}
      />
      <Navigation feeds={feeds} />

      {/* Flatlist mapeo */}
      {/* <AllFeedsToggle feeds={feeds} /> */}
      <Done onPress={() => handlePress()}>
        <ButtonText>Done</ButtonText>
      </Done>
    </View>
  );
};
