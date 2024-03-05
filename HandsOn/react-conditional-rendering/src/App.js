import logo from "./logo.svg";
import "./App.css";
import Login from "./login";
import Mailbox from "./Mailbox";
import Garage from "./Garage";

function App() {
  return (
    <div className="App">
      {/* <Login isLoggedIn={true} />
      <hr />
      <Login isLoggedIn={false} /> */}
      {/* <Mailbox unreadMessages={0} /> */}
      <Garage cars={["Audi", "MG", "Benz"]} />
      <hr />
      <Garage cars={[]} />
    </div>
  );
}

export default App;
