import React from "react"
import FeedList from "../Common/FeedList/FeedList"

export default ({feeds, handleStory})=>{
    return <FeedList title={"Custom"} feeds={feeds} disableTick={true} handleStory={handleStory}/>
}