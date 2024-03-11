import React, { useState, useEffect } from "react";

export default function Demo2() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount((count) => count + 1);
  }, []); //adding emtpty brackets calles useEffect only once.
  return <div>I have rendered {count} times</div>;
}
