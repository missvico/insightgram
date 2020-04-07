import React from "react";
import { View } from "react-native";
import { Done, ButtonText } from "./style";
import Navigation from "../Subscribe/Navigation";
import Search from "../Common/Search/Search";

export default ({ feeds, handlePress }) => {
  return (
    <View style={{ flex: 1 }}>
      <Search />
      <Navigation feeds={feeds} />
      <Done onPress={() => handlePress()}>
        <ButtonText>Done</ButtonText>
      </Done>
    </View>
  );
};
