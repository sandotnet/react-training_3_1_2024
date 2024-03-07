import React, { useState } from "react";

export default function Country() {
  const [countries, setCountries] = useState(["India", "UK", "US"]);
  //   const updateCountries = () => {
  //     setCountries(["Rusia", "Japan", "China"]);
  //   };
  const updateCountries = () => {
    setCountries((PrevState) => [...PrevState, "Rusia", "Japan", "China"]);
  };
  return (
    <div>
      Country
      <ul>
        {countries.map((c) => (
          <li>{c}</li>
        ))}
      </ul>
      <button onClick={updateCountries}>Update</button>
    </div>
  );
}
