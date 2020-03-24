import React from "react";
import { render } from "react-dom";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default ({ handlePress }) => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={handlePress}>
        <AntDesign name="pluscircle" size={35} color="#01ADED" />
      </TouchableWithoutFeedback>
    </View>
  );
};
