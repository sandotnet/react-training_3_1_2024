import logo from "./logo.svg";
import "./App.css";
import Welcome from "./welcome";
import Shop from "./Book";
import Garage from "./Car";
import ClassRoom from "./Student";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Welcome name="Virat" />
        <Welcome name="Rohith" /> */}
        <Shop />
        {/* <Garage brand="Audi" color="Red" /> */}
        {/* <ClassRoom /> */}
      </header>
    </div>
  );
}

export default App;
