import React, { useState } from "react";

function HOC() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h2>count : {count}</h2>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>deccrement</button>
      </div>
    </>
  );
}

export default HOC;
