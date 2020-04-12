import styled from "styled-components/native";
import { HEADER_FONT_GROUP_TITLE } from "../../styles/index";

const styles = {};

styles.TabContainer = styled.View`
  width: 100%;
  margin-vertical: 12px;
  flex-direction: row;
  justify-content: center;
  padding-horizontal: 10px;
  align-items: center;
`;

styles.ItemText = styled.Text`
  font-family: ${HEADER_FONT_GROUP_TITLE};
  font-size: 17px;
  padding-top: 15px;
  margin-bottom: -11px;
  padding-left: 16px;
`;

styles.TabText = styled.Text`
  font-family: "SFProText-medium";
  font-size: 14px;
  color: ${(props) => props.color};
  padding-left: 15px;
  padding-right: 15px;
`;

styles.TabBorder = styled.View`
  border-bottom-color: #000;
  opacity: 0.1;
  border-bottom-width: 1;
`;

export default styles;
