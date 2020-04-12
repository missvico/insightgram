import styled from "styled-components/native";
import { HEADER_FONT_BUTTOM } from "../../styles/index";

export const Title = styled.Text`
  padding-top: 60px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

export const Done = styled.TouchableOpacity`
  background-color: #0066ff;
  height: 60px;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${HEADER_FONT_BUTTOM};
  color: #fff;
  font-size: 17px;
  text-align: center;
`;
