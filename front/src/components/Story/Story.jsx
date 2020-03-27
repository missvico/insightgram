import React from "react"
import {Text, TouchableWithoutFeedback} from "react-native"
import {ToggleStory, Touchable, StoryContainer} from "./style"

export default ({story, index, storiesLength, handleBack, handleFoward, handleHome})=>{

    return (
        <StoryContainer>
            <Text>{story.id}</Text>
            <ToggleStory>
                <TouchableWithoutFeedback onPress={index? handleBack: handleHome}>
                    <Touchable flex={2}>
                    </Touchable>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={(index+1===storiesLength)? handleHome: handleFoward}>
                    <Touchable flex={2}>
                    </Touchable>
                </TouchableWithoutFeedback>
                </ToggleStory>
        </StoryContainer>
    )
}