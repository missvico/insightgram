import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import React from "react";
import ProgressIndicator from "./ProgressIndicator";
import {
  Header,
  ProgressBarContainer,
  TitleIconContainer,
  IconsContainer,
  TitleContainer,
  Title,
} from "./style";

export default ({
  name,
  play,
  handleClose,
  handlePlay,
  stories,
  showHeader,
}) => {
  return (
    <Header showHeader={showHeader}>
      <ProgressBarContainer>
        <ProgressIndicator stories={stories} />
      </ProgressBarContainer>
      <TitleIconContainer>
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
      </TitleIconContainer>
    </Header>
  );
};
