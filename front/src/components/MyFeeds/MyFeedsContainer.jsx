import React from "react"
import FeedList from "../Common/FeedList/FeedList"

export default ({feeds})=>{
    return <FeedList title={"myFeeds"} feeds={feeds}/>
}