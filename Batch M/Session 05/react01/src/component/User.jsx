import React from "react";

function User() {
  let name = "John";
  let age = 30

  return (
    <>
      <div><strong>This is my first component in React</strong></div>
      <div>My name is {name}</div>
      <div>My age is: {age}</div>
    </>
  );
}

export default User;
