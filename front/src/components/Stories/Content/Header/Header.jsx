import { Feather } from "@expo/vector-icons";
import { View, TouchableOpacity, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { Header } from "./style";

export default ({ play, handleClose }) => {
  return (
    <Header>
      <TouchableOpacity>
        {play ? (
          <Feather name="play" color="#ffffff" size="25px" />
        ) : (
          <Feather name="pause" color="#ffffff" size="25px" />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleClose}>
        <Feather
          name="x"
          color="#ffffff"
          size="30px"
          style={{ paddingLeft: 20 }}
        />
      </TouchableOpacity>
    </Header>
  );
};
