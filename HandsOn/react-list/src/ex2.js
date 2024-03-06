import React from "react";

export default function Ex2() {
  let countries = ["india", "china", "japna", "rusia"];
  return (
    <div>
      <h2>Country List</h2>
      <ul>
        {countries.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <hr />
      <table border={1}>
        <thead>
          <tr>
            <td>Contry</td>
          </tr>
        </thead>
        <tbody>
          {countries.map((item) => (
            <tr>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
