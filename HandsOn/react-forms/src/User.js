import React, { useState } from "react";
let users = [
  { id: 343340, name: "Shiva", city: "Pune" },
  { id: 343350, name: "Ram", city: "Mumbai" },
  { id: 343360, name: "Krishna", city: "Chennai" },
  { id: 343370, name: "Arjun", city: "Bangalore" },
  { id: 343380, name: "Bheem", city: "Pune" },
];
let citites = ["Pune", "Delhi", "Chennai", "Kochi"];

export default function User() {
  const [items, setItems] = useState(users);
  const [id, setId] = useState(0);
  const [uname, setUname] = useState("");
  const [city, setCity] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    let item = { id: id, name: uname, city: city };
    console.log(item);
    setItems((prevState) => [...prevState, item]);
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <table className="table">
          <tr>
            <td>Id</td>
            <td>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setId(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setUname(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>City</td>
            <td>
              <select
                type="text"
                className="form-control"
                onChange={(e) => setCity(e.target.value)}
              >
                {citites.map((city) => (
                  <option value={city}>{city}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="submit">Submit</button>
            </td>
          </tr>
        </table>
      </form>
      <hr />
      <table className="table table-striped">
        <thead className="table-primary">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {items.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
