import React, { useState } from "react";

export default function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState(2000);
  const [color, setColor] = useState("red");
  const updateCar = () => {
    //update the state
    setBrand("Hundai");
    setColor("blue");
    setYear(2020);
    setModel("i20");
  };
  return (
    <>
      <h1>My brand {brand}</h1>
      <p>
        It is a {color} {model} from {year}
      </p>
      <button onClick={updateCar}>Update</button>
    </>
  );
}
