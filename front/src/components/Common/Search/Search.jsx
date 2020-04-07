import React from "react";
import { Text, View, TextInput } from "react-native";
import { Input, SearchContainer } from "./style";
import { AntDesign } from "@expo/vector-icons";

export default ({ onChange, inputValue }) => {
  return (
    <View>
      <SearchContainer>
        <AntDesign
          name="search1"
          style={{ color: "#000", opacity: "0.32" }}
          size={20}
        />
        <Input placeholder="Search" />
      </SearchContainer>
    </View>
  );
};
