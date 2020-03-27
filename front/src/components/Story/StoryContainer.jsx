import React from "react"
import Story from "./Story"

export default ({story, handleBack, handleFoward, index, storiesLength, handleHome})=>{
    return <Story 
    story={story} 
    handleFoward={handleFoward} 
    handleBack={handleBack} 
    index={index} 
    storiesLength={storiesLength}
    handleHome={handleHome}
    />
}