import React, { Component } from 'react'

class Counter extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
           count: 0  
        }
    }
    
    // addCount(){
    //     this.setState({
    //       count: this.state.count+1
    //     }, () => {
    //         console.log(this.state.count)
    //     }    
    //     ) 
    // }
    // lessCount(){
    //     this.setState({
    //       count: this.state.count-1
    //     }, () => {
    //         console.log(this.state.count)
    //     }       
    //     ) 
    // }
    incre(){
        this.setState(preState => ({
            count: preState.count + 1
        }), () => {
            console.log(this.state.count)
        })
    }
    addFive() {
        this.incre()
        this.incre()
        this.incre()
        this.incre()
        this.incre()
    }

    render() {
        return (
            <div>
               <h1>Count : {this.state.count}</h1>
               <button onClick = {() => this.addFive()}>+</button>
               {/* <button onClick = {() => this.addCount()}>+</button> */}
               {/* <button onClick = {() => this.lessCount()}>-</button> */}
            </div>
        )
    }
}

export default Counter
