import React from 'react'

function Fclick() {
    
  function clickHandler(){
    console.log("Hey u clicked");
  }
    return (
        <div>
          <button onClick={clickHandler}>+</button>  
        </div>
    )
}

export default Fclick
