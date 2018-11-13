import React, { Component } from "react"

export default class Home extends Component{

    render(){
        return(
            <div>
                <h3>Welcome {this.props.user}</h3>
            </div>
        )
    }
}