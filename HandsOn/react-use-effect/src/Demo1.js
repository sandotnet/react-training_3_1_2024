import React, { useState, useEffect } from "react";

export default function Demo1() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount((count) => count + 1);
  }); //useEffect invoke when component is loaded
  return <div>I have rendered {count} times</div>;
}
