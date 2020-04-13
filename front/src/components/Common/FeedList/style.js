import styled from "styled-components/native"
import {TEXT} from "../../../styles"
import {VirtualizedList} from "react-native"

export const Title = styled.Text`
    padding-top: 5px;
    padding-bottom: 2px;
    font-size: 15px;
    font-weight: bold;
    padding-left: 10px;
    color: ${TEXT}
`

export const List = styled.VirtualizedList`
    margin-left: 10px
`