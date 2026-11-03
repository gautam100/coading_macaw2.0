import React, { useState } from "react";
import Counter from "./Counter";
import Loop from "./Loop";

function State() {
  const [fruit, setFruit] = useState("Apple");

  function changeFruit(fr) {
    if (fruit === "Apple") {
      setFruit("mango");
    }else{
        setFruit("Apple")
    }
  }
  return (
    <>
      <button onClick={()=>changeFruit('data')}>Change</button>
      <span>
        <strong> {fruit}</strong>
      </span>
      <Counter />
      <Loop />
    </>
  );
}

export default State;
