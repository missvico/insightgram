import React, {useState} from "react"
import FeedIcon from "./FeedIcon"

export default FeedIconContainer = (props) => {
    const [selected, setSelected] = useState(false)

    const handlePress = ()=>{
        setSelected(!selected)
    }

    return (
        <FeedIcon handlePress={handlePress} tick={selected}/>
    )
    
}