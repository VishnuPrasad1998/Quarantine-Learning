import React, { Component } from 'react'

class Usergreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           isLoggedIn: false  
        }
    }
    
    render() {
            // return(
            //     this.state.isLoggedIn ?
            //     <div>Hai vp</div> : <div>Hi Guest</div>
            // )
            return this.state.isLoggedIn && <div>Hello vp</div>
            }
}

export default Usergreeting