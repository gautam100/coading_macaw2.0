import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button> &nbsp;
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
}

export default Counter;
