import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'vp'
        }
        console.log("Const")
    }
    
    componentDidMount(){
        console.log('componentDidMount')
    }
    render() {
        console.log("Render method")
        return (
        <div>
            <div>Life Cycle A</div>
            <LifecycleB />
        </div>
        ) 
    }
}

export default LifecycleA
