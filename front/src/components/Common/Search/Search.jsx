import React from "react";
import { Text, View } from "react-native";
import { Search } from "./style";

export default ({ onChange, inputValue }) => {
  return (
    <View>
      <Search
        placeholder="Search"
        onChange={(e) => onChange(e)}
        value={inputValue}
      />
    </View>
  );
};
