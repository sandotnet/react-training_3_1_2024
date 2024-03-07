import React, { useState } from "react";

export default function Greet() {
  const [uname, setUname] = useState("");
  const [msg, setMsg] = useState("");
  const Greet = (e) => {
    e.preventDefault(); //prevent the form submission
    setMsg("Hello " + uname);
  };
  return (
    <div className="container">
      <form>
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
              <button className="btn btn-primary" onClick={Greet}>
                Greet
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <span className="text-primary">{msg}</span>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
