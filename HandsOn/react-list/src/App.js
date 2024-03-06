import logo from "./logo.svg";
import "./App.css";
import Ex2 from "./ex2";
import Ex3 from "./ex3";
import Garage from "./ex4";
import Ex5 from "./ex5";
import School from "./ex6";
import Ex7 from "./ex7";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Ex2 /> */}
        {/* <Ex3 /> */}
        {/* <Garage /> */}
        {/* <Ex5 /> */}
        {/* <School /> */}
        <Ex7 cities={["Channi", "Kochi", "Pune", "Banglore"]} />
        <hr />
        <Ex7 cities={["Chicago", "Newyord", "Dollas"]} />
      </header>
    </div>
  );
}

export default App;
