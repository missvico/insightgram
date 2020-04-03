import styled from "styled-components/native";
import { WHITE, LIGHT_BLUE } from "../../styles";

export const Title = styled.Text`
  padding-top: 60px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

export const Search = styled.TextInput`
  margin: 13px 14px 0px 18px;
  border-radius: 13px;
  height: 35px;
  font-size: 17px;
  padding: 0 30px;
  background-color: rgba(142, 142, 147, 0.12);
`;

export const SearchContainer = styled.TextInput`
  margin-left: 32px;
  margin-right: 32px;
`;
export const Done = styled.TouchableOpacity`
  background-color: rgb(0, 122, 255);
  height: 60px;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  text-align: center;
`;

export const TabContainer = styled.View`
  width: 100%;
  margin-vertical: 12px;
  flex-direction: row;
  justify-content: center;
  padding-horizontal: 10px;
  align-items: center;
`;

export const TabText = styled.Text`
  font-size: 14px;
  padding: 0 10px;
`;

export const ItemText = styled.Text`
  font-size: 17px;
  padding-top: 15px;
  margin-bottom: -11px;
  padding-left: 16px;
`;
