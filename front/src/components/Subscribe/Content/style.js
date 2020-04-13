import styled from "styled-components/native";
import { TEXT } from "../../../styles";

export const TabContainer = styled.View`
  width: 100%;
  margin-vertical: 12px;
  flex-direction: row;
  justify-content: center;
  padding-horizontal: 10px;
  align-items: center;
`;

export const ItemText = styled.Text`
  font-size: 17px;
  padding-top: 15px;
  margin-bottom: -11px;
  padding-left: 16px;
  color: ${TEXT};
`;
