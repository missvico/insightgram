import styled from "styled-components/native"
import {WHITE, LIGHT_BLUE} from "../../styles"

export const Title = styled.Text`
    padding-top: 60px;
    padding-bottom: 20px;
    text-align:center;
    font-size: 30px;
    font-weight: bold
`

export const Search = styled.TextInput`
    padding-left: 10px;
    margin: 10px;
    border-radius: 10px;
    height: 35px;
    width: 300px;
    border: 1px black
`

export const Done = styled.TouchableOpacity`
    background-color: ${WHITE};
    height: 60px;
    justify-content: center
`

export const ButtonText = styled.Text`
    color: ${LIGHT_BLUE};
    font-size: 18px;
    text-align: center
`