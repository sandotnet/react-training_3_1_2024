import logo from "./logo.svg";
import "./App.css";
import Welcome from "./welcome";

function App() {
  return (
    <div className="App">
      <h1>This is App Component</h1>
      {/* Welcome component is nested in App Component */}
      <Welcome />
    </div>
  );
}

export default App;
