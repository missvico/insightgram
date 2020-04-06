import styled from "styled-components/native"
import { LinearGradient } from 'expo-linear-gradient';
import {LIGHT_GREY, DARK_BLUE, WHITE} from "../../../styles"
import {RED} from "../../../styles"

export const IconContainer = styled.View`
    margin: ${props=> props.size==="big"? 3*1.15: 2*1.15}px;
`


export const PreviewImage = styled.Image`
    height: ${props=> props.size==="big"? 181*1.15: 148*1.15}px;
    width: ${props=> props.size==="big"? 101*1.15: 82*1.15}px;
    border-radius: ${props=> props.size==="big"? 9*1.15: 9*1.15}px;
`
export const GreyBackgroud = styled.View`
    height: ${props=> props.size==="big"? 181*1.15: 148*1.15}px;
    width: ${props=> props.size==="big"? 101*1.15: 82*1.15}px;
    border-radius: ${props=> props.size==="big"? 9*1.15: 9*1.15}px;
    background-color: rgb(132,129,129)
`

export const IconCard = styled.View`
    height: ${props=> props.size==="big"? 181*1.15: 148*1.15}px;
    width: ${props=> props.size==="big"? 101*1.15: 82*1.15}px;
    border-radius: ${props=> props.size==="big"? 9*1.15: 9*1.15}px;
    background-color: ${props=> props.preview? "rgba(0,0,0, 0.5)": "rgb(132,129,129)"};
    flex-direction:column;
    justify-content: space-between;
    margin: 0px;
    position: absolute;
    padding-top: ${props=> props.size==="big"? 8*1.15: 6*1.15}px;;
    padding-left: ${props=> props.size==="big"? 8*1.15: 6*1.15}px;;
    padding-right: ${props=> props.size==="big"? 8*1.15: 6*1.15}px;;
    padding-bottom: ${props=> props.size==="big"? 8*1.15: 6*1.15}px;;
`

export const Avatar = styled.Image`
    height: ${27*1.15}px;
    width: ${27*1.15}px;
    border-radius: ${27*1.15/2}px 
`

export const AvatarBorderGradient = styled(LinearGradient)`
    height: ${32*1.15}px;
    width: ${32*1.15}px;
    border-radius: ${32*1.15/2}px;
    align-items: center;
    justify-content: center;
`

export const AvatarBorder = styled.View`
    height: ${32*1.15}px;
    width: ${32*1.15}px;
    border-radius: ${32*1.15/2}px;
    background-color: transparent;
    align-items: center;
    justify-content: center;
`

export const CardName = styled.Text`
    text-align: left;
    margin-top: 25%;
    font-weight: bold;
    font-size: ${13*1.15}px;
    color: ${WHITE};
    shadow-color: #000;
    text-shadow-color: rgb(0, 0, 0);                
    text.shadow-offset: { width: 0, height: 2 };                 
    text-shadow-radius: 4;
    elevation: 0;
`
export const TickBorder = styled.View`
    height: ${27*1.15}px;
    width: ${27*1.15}px;
    border-radius: ${27*1.15/2}px;
    background-color: ${props=> props.tick? WHITE: "transparent"};
    border: ${1*1.15}px solid ${WHITE};
    padding-top: 1px;
    margin-top: 4px;
    margin-right: 4px;
    align-items: center;
    justify-content: center;
`

export const TopContainer = styled.View`
    flex: 1
    flex-direction: row; 
    justify-content: space-between;
`
