import React from "react"
import {Image, TouchableWithoutFeedback} from "react-native"
import {ToggleStory, Touchable, StoryContainer} from "./style"

export default ({story, handleStoryChange})=>{

    return (
        <StoryContainer>
            <Image style={{height:"100%", width:"100%"}} source={{uri:story.thumbnail}}/>
            <ToggleStory>
                <TouchableWithoutFeedback onPress={()=>handleStoryChange(-1)}>
                    <Touchable flex={1}>
                    </Touchable>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>handleStoryChange(1)}>
                    <Touchable flex={2}>
                    </Touchable>
                </TouchableWithoutFeedback>
                </ToggleStory>
        </StoryContainer>
    )
}