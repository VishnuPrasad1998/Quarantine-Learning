import React from 'react'
import Person from './Person'

function Namelist() {
    // const names = ['VP','Naveen','Aku']
    const person = [
        {
            id: 1,
            name:'Vp',
            attitide:'Good'
        },
        {
            id: 2,
            name:'Aku',
            attitide:'Fine'
        },
        {
            id: 3,
            name:'Naveen',
            attitide:'Better'
        },
        {
            id: 4,
            name:'Maata',
            attitide:'Scene illa'
        }

    ]
    const personList = person.map(person => <Person key={person.name} person={person} />)
    return (
        <div>{personList}</div>
    )
}

export default Namelist
