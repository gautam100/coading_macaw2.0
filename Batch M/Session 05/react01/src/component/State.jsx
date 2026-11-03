import React, { useState } from 'react'

function State() {
    const [fruit, setFruit] = useState("apple")
    function changeFruit(){
        setFruit("mango")
        console.log(fruit)
    }

  return (
    <>
    {fruit} 
    <button onClick={changeFruit}> Change</button>
    </>
  )
}

export default State