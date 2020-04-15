import React from "react";
import { View } from "react-native";
import { Input, SearchContainer } from "./style";
import { AntDesign } from "@expo/vector-icons";

export default ({ handleSearch, handleTarget }) => {
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <SearchContainer>
        <AntDesign
          name='search1'
          style={{ color: "#000", opacity: 0.32 }}
          size={20}
        />
        <Input
          placeholder='Search'
          onChange={(evt) => handleSearch(evt, handleTarget)}
        />
      </SearchContainer>
    </View>
  );
};
