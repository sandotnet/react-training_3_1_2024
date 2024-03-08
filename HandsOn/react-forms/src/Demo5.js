import React, { useState } from "react";
let countries = ["India", "China", "Japan", "Butan"];

export default function Demo5() {
  const [country, setCountry] = useState("India");
  return (
    <div className="container">
      <label>Select Country</label>
      <div className="col">
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          {countries.map((c) => (
            <option value={c}>{c}</option>
          ))}
        </select>
      </div>
      <span>You Are resident of {country}</span>
    </div>
  );
}
