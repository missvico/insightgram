import React, {useState} from "react"
import FeedIcon from "./FeedIcon"

export default FeedIconContainer = ({name, isSuscribed, hasPendingStories, disableTick}) => {
    const [selected, setSelected] = useState(isSuscribed)

    const handlePress = ()=>{
        setSelected(!selected)
    }

    return (
        <FeedIcon handlePress={disableTick? null: handlePress} tick={selected} name={name} hasPendingStories={hasPendingStories}/>
    )

}
