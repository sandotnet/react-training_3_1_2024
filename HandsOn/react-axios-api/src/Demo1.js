import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Demo1() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setUsers(response.data);
      console.log(users);
    });
  });
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.userId}</td>
              <td>{user.id}</td>
              <td>{user.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
