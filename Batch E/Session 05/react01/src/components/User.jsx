import React from 'react'

function User() {
    let name = "John"
    let age = 25
    let isStudent = false


  return (
    <> 
        <div>This is User.jsx</div>
        <p>
            This is my first component. My name is {name}
            <br />
            My age is {age}
        </p>
    </>
  )
}

export default User