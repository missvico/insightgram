import React from "react";
import { View, ActivityIndicator } from "react-native";
import { Done, ButtonText } from "./style";
import Navigation from "./Content/Navigation";
import Search from "../Common/Search/Search";

export default ({ feeds, handlePress, loading }) => {
  return (
    <View style={{ flex: 1 }}>
      <Search />
      <Navigation feeds={feeds} />
      <Done activeOpacity={1} onPress={() => handlePress()}>
        {loading ? (
          <ActivityIndicator color={"#fff"} size={"small"} />
        ) : (
          <ButtonText>Done</ButtonText>
        )}
      </Done>
    </View>
  );
};
