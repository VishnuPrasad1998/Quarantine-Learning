import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName:"Parent"
        }
    this.giveAlert = this.giveAlert.bind(this)
    }
    giveAlert(childName,dialog){
        alert(`Hello ende ${this.state.parentName} by ${childName} enn ${dialog}`)
    }
    
    render() {
        return (
            <div>
                <Child greetHandler={this.giveAlert} />
            </div>
        )
    }
}

export default Parent