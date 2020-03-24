import React, {useState} from "react"
import FeedIcon from "./FeedIcon"

export default FeedIconContainer = ({name, isSuscribed}) => {
    const [selected, setSelected] = useState(isSuscribed)

    const handlePress = ()=>{
        setSelected(!selected)
    }

    return (
        <FeedIcon handlePress={handlePress} tick={selected} name={name}/>
    )

}
