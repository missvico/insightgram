import React from "react"
import FeedIcon from "../components/FeedIcon"

export default class FeedIconContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tick: false
        }
        this.handlePress = this.handlePress.bind(this)
    }

    handlePress(){
        let tickValue = this.state.tick
        this.setState({tick: !tickValue })
    }

    render(){
       return <FeedIcon handlePress={this.handlePress} tick={this.state.tick}/>
    }
}