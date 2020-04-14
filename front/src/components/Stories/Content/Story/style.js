import Styled from "styled-components";

export const ToggleStory = Styled.View`
    position: absolute;
    flex: 1;
    flex-direction: row;
`;

export const Touchable = Styled.View`
    flex: ${(props) => props.flex};
`;

export const StoryContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #DDD
`;
