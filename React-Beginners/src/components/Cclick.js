import React, { Component } from 'react'

class Cclick extends Component {
    clickHandler(){
        console.log("Clicked")
    }
    render() {
        return (
            <div>
            <button onClick={this.clickHandler}>+</button>   
            </div>
        )
    }
}
export default Cclick