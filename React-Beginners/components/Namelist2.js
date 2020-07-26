import React from 'react'
import Person from './Person'

function Namelist2() {
    const names = ['VP','Naveen','Aku']
const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div>{nameList}</div>
    )
}

export default Namelist2
