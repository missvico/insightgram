import styled from "styled-components/native";
import {TEXT, LIGHT_BLUE, WHITE} from "../../styles"

export const Title = styled.Text`
  padding-top: 60px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: ${TEXT}
`;

export const ItemText = styled.Text`
  font-size: 17px;
  padding-top: 15px;
  margin-bottom: -10px;
  padding-left: 16px;
  color: ${TEXT}
`;

export const SeeAllButton = styled.View`
  height: 45px;
  margin-right: 20px;
  padding-top: 15px;
  margin-bottom: -10px;
  padding-left: 16px;
`;

export const SeeAllText = styled.Text`
  color: ${LIGHT_BLUE};
  font-size: 17px;
`;

export const Subscribe = styled.View`
  width: 150px;
  height: 40px;
  background-color: ${LIGHT_BLUE };
  border-radius: 20px;
  align-content: flex-end;
  align-items: center;
  align-self: center;
  flex-direction: row;
  justify-content: center;
`;

export const Align = styled.View`
  position: absolute;
  bottom: 24px;
  right: 24px;
`;

export const SubscribeTxt = styled.Text`
  margin: 5px;
  color: ${WHITE};
  align-self: center;
  align-content: center;
  align-items: center;
  text-align: center;
`;
