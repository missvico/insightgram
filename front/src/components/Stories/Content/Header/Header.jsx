import { Feather } from "@expo/vector-icons";
import { View, TouchableOpacity, Text} from "react-native";
import React, { useState, useEffect } from "react";
import { Header, IconsContainer, TitleContainer, Title} from "./style";

export default ({ name, play, handleClose, handlePlay }) => {
  return (
    <Header>
      <TitleContainer>
        <Title>{name}</Title>
      </TitleContainer>
      <IconsContainer>
        <TouchableOpacity onPress={handlePlay}>
          {play ? (
            <Feather name="pause" color="#ffffff" size={25} />
          ) : (
            <Feather name="play" color="#ffffff" size={25} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClose}>
          <Feather
            name="x"
            color="#ffffff"
            size={30}
            style={{ paddingLeft: 20 }}
          />
        </TouchableOpacity>
      </IconsContainer>
    </Header>
  );
};
