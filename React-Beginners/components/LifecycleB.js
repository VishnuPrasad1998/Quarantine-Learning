import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'vp'
        }
        console.log("Const-B")
    }
    
    componentDidMount(){
        console.log('componentDidMount-B')
    }
    render() {
        console.log("Render method- B")
        return <div>Life Cycle B</div> 
    }
}

export default LifecycleB
