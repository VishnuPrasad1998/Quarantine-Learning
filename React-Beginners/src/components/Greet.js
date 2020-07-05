import React from 'react'

const Greet = props => {
    const {name,char} = props
    return(
        <div>
            <h1> Hello {name}...u are a {char} boy</h1>
        </div>
    )

}


//export const Greet = () => <h1> Hello VP...</h1>

export default Greet