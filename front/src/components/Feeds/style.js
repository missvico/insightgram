import styled from "styled-components/native";
import {
  HEADER_FONT_BUTTOM,
  LIGHT_BLUE,
  WHITE,
  TEXT,
} from "../../styles/index";

export const Title = styled.Text`
  padding-top: 60px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: ${TEXT};
`;

export const Done = styled.TouchableOpacity`
  background-color: ${LIGHT_BLUE};
  height: 60px;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${HEADER_FONT_BUTTOM};
  color: ${WHITE};
  font-size: 18px;
  text-align: center;
`;
