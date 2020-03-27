import React, {useState, useEffect}  from "react"
import StoryContainer from "../Story/StoryContainer"

export default ({route, navigation})=>{
    const [index, setIndex] = useState(0)

    const handleFoward = ()=>{
        setIndex(index+1)
    }

    const handleBack = ()=>{
        setIndex(index-1)
    }

    const handleHome = () =>{
        navigation.navigate("Home")
    }

    return <StoryContainer 
    story={route.params.stories[index]} 
    handleFoward={handleFoward} 
    handleBack={handleBack} 
    index={index} 
    storiesLength={route.params.stories.length}
    handleHome={handleHome}
    />
}