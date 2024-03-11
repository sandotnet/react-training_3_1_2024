import React, { useState, useEffect } from "react";

export default function Demo3() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculate] = useState(0);
  useEffect(() => {
    setCalculate(() => count * 2);
  }, [count]); //when count value updates, the effect will be run again
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <p>Calucation:{calculation}</p>
    </div>
  );
}
