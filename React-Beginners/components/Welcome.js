import React, { Component } from 'react'

class Welcome extends Component{
    render(){
            const{name,char} = this.props
            return(
                <div>
                <h1>How u doin...Mr {name} u are a {char}</h1>
                </div>
                )
        
       
    }
}

export default Welcome