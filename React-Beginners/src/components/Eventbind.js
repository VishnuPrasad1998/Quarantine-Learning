import React, { Component } from 'react'

class Eventbind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }
        this.clickHandler = this.clickHandler.bind(this)    
    }
   

    clickHandler = () =>{
        this.setState({
            message: "bye"
        }
        )
    }
    
    render() {
        return (
            <div>
              <h1>{this.state.message}</h1>  
              <button onClick={this.clickHandler}>Click</button>  
            </div>
        )
    }
}

export default Eventbind