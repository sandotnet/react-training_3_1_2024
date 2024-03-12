import { useState, createContext, useContext } from "react";
const UserContext = createContext();
function Component1() {
  const [user, setUser] = useState("Rahul");
  return (
    <>
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}`}</h1>
        <Component4 />
      </UserContext.Provider>
    </>
  );
}
function Component4() {
  return (
    <>
      <h1>Component4</h1>
      <Component5 />
    </>
  );
}
function Component5() {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!!!`}</h2>
    </div>
  );
}
export default Component1;
