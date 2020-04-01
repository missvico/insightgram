import Styled from "styled-components";

export const Header = Styled.View`
margin-top: 0;
margin-left:0;
margin-right:0;
flex-direction: row;
padding-top: 50px;
padding-left: 25px;
padding-right: 25px;
padding-bottom: 15px;
height: 100px;
justify-content: space-between;
background-color: rgb(132, 129, 129);
opacity: 0.5
`;

export const IconsContainer = Styled.View`
flex-direction: row;
justify-content: center;
align-items: center
`
export const TitleContainer = Styled.View`
align-items: center;
justify-content: center
`

export const Title = Styled.Text`
color: #ffffff;
font-weight: 500;
font-size: 18px
`