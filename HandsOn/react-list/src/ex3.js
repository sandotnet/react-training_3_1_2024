import React from "react";

export default function Ex3() {
  let employees = ["Preethi", "Tarun", "Gayathri", "Vaishnavi"];
  return (
    <div className="container">
      <table className="table table-stripped">
        <thead className="table-primary">
          <tr>
            <th>Employee</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr>
              <td>{emp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
