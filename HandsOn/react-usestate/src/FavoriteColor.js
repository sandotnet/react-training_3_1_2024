import React, { useState } from "react";

export default function FavoriteColor() {
  //initialize useState
  const [color, setColor] = useState("Red"); //red is the default value of color
  const changeColor = () => {
    setColor("Green"); //setColor is use to update the color
  };
  return (
    <div>
      My FavoriteColor {color} <br></br>
      <button onClick={changeColor}>ClickMe</button>
    </div>
  );
}
