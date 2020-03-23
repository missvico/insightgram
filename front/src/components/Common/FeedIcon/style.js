import styled from "styled-components/native"
import {LIGHT_GREY} from "../../../styles"
import {RED} from "../../../styles"

export const IconCard = styled.View`
    height: ${props=> props.height}px;
    width: ${props=> props.height*0.70}px;
    border-radius: ${props=> props.height*0.1}px;
    background-color: ${LIGHT_GREY};
    flex-direction:column;
    justify-content: space-between;
    margin: ${props=> props.height*0.02}px
`

export const Avatar = styled.Image`
    height: ${props=> props.height*0.18}px;
    width: ${props=> props.height*0.18}px;
    border-radius: ${props=> props.height*0.18/2}px
`

export const AvatarBorder = styled.View`
    height: ${props=> props.height*0.23}px;
    width: ${props=> props.height*0.23}px;
    border-radius: ${props=> props.height*0.23/2}px;
    border: 2px solid ${RED};
    align-items: center;
    justify-content: center;
    margin-left: ${props=> props.height*0.07}px;
    margin-top: ${props=> props.height*0.07}px
`

export const TickContainer = styled.View`
    flex-direction: row; 
    margin-top: ${props=> props.height*(0.3)}px;
    margin-left: ${props=> props.height*(0.4)}px;
`
