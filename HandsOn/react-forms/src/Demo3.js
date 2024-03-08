import React, { useState } from "react";

export default function Demo3() {
  const [uname, setUname] = useState("");
  const [names, setNames] = useState([]);
  const submitForm = (e) => {
    setNames([...names, uname]);
    e.preventDefault(); //prevents form submission to the server
  };
  return (
    <div className="container">
      <form onSubmit={submitForm}>
        <table className="table">
          <tr>
            <td>Enter Name</td>
            <td>
              <input
                type="text"
                className="form-control"
                value={uname}
                onChange={(e) => setUname(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </td>
          </tr>
        </table>
        <hr />
        <table>
          <thead>
            <tr>
              <td>Names</td>
            </tr>
          </thead>
          <tbody>
            {names.map((n) => (
              <tr>
                <td>{n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}
