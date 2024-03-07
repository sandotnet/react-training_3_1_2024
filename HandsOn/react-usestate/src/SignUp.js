import React, { useState } from "react";

export default function SignUp() {
  const [{ name, email, address }, setUser] = useState({
    name: "Tarun",
    email: "tarun@gamil.com",
    address: "Chennai",
  });
  const updateUser = () => {
    setUser((previousState) => ({
      ...previousState,
      email: "tarun12@gmail.com",
      address: "Gundi,Chennai",
    }));
  };
  return (
    <div>
      User Details <br />
      Name:{name} <br />
      email:{email} <br />
      Address:{address} <br />
      <button onClick={updateUser}>Update</button>
    </div>
  );
}
