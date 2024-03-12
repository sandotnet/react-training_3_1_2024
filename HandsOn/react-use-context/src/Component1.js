import { useState } from "react";
function Component1() {
  const [user, setUser] = useState("Rahul");
  return (
    <>
      <h1>{`Hello ${user}`}</h1>
      <Component2 user={user} />
    </>
  );
}
function Component2({ user }) {
  return (
    <>
      <Component3 user={user} />
    </>
  );
}
function Component3({ user }) {
  return (
    <>
      <Component4 user={user} />
    </>
  );
}
function Component4({ user }) {
  return (
    <>
      <Component5 user={user} />
    </>
  );
}
function Component5({ user }) {
  return (
    <div>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!!!`}</h2>
    </div>
  );
}
export default Component1;
