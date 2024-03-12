import React from "react";
import "./App.css";
import { Context } from "./context";
import MyComponent from "./MyComponent";
import Application from "./Application";
function App() {
  const value = "My Context Value";
  return (
    <Context.Provider value={value}>
      <MyComponent />
    </Context.Provider>
    // <Application />
  );
}

export default App;
