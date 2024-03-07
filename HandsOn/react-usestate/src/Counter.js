import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); //0 is the default value of the count
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      Counter:{count}
      <br />
      <button onClick={increment}>Click</button>
    </div>
  );
}
