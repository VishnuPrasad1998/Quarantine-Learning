import React from 'react'

function Person({person}) {
    return (
        <div>
          <h1>My id is {person.id} and my attitude is {person.attitide} and I am {person.name}</h1>  
        </div>
    )
}

export default Person
