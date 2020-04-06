import styled from "styled-components/native";
import { LIGHT_GREY, DARK_BLUE, WHITE } from "../../../styles";
import { RED } from "../../../styles";

export const IconContainer = styled.View`
  margin: ${(props) => (props.size === "big" ? 3 * 1.15 : 2 * 1.15)}px;
`;

export const PreviewImage = styled.Image`
  height: ${(props) => (props.size === "big" ? 181 * 1.15 : 148 * 1.15)}px;
  width: ${(props) => (props.size === "big" ? 101 * 1.15 : 82 * 1.15)}px;
  border-radius: ${(props) => (props.size === "big" ? 9 * 1.15 : 9 * 1.15)}px;
`;
export const GreyBackgroud = styled.View`
  height: ${(props) => (props.size === "big" ? 181 * 1.15 : 148 * 1.15)}px;
  width: ${(props) => (props.size === "big" ? 101 * 1.15 : 82 * 1.15)}px;
  border-radius: ${(props) => (props.size === "big" ? 9 * 1.15 : 9 * 1.15)}px;
  background-color: rgb(132, 129, 129);
`;

export const IconCard = styled.View`
  height: ${(props) => props.height}px;
  width: ${(props) => props.height * 0.7}px;
  border-radius: ${(props) => props.height * 0.1}px;
  background-color: ${LIGHT_GREY};
  flex-direction: column;
  justify-content: space-between;
  margin: ${(props) => props.height * 0.02}px;
`;

export const Avatar = styled.Image`
  height: ${27 * 1.15}px;
  width: ${27 * 1.15}px;
  border-radius: ${(27 * 1.15) / 2}px;
`;

export const AvatarBorderGradient = styled(LinearGradient)`
  height: ${32 * 1.15}px;
  width: ${32 * 1.15}px;
  border-radius: ${(32 * 1.15) / 2}px;
  align-items: center;
  justify-content: center;
`;

export const AvatarBorder = styled.View`
  height: ${32 * 1.15}px;
  width: ${32 * 1.15}px;
  border-radius: ${(32 * 1.15) / 2}px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => props.height * 0.07}px;
  margin-top: ${(props) => props.height * 0.07}px;
`;

export const CardName = styled.Text`
  text-align: center;
  margin-top: 25%;
  font-weight: bold;
  color: ${WHITE};
`;

export const TickContainer = styled.View`
  flex-direction: row;
  margin-top: ${(props) => props.height * 0.1}px;
  margin-left: ${(props) => props.height * 0.4}px;
`;
