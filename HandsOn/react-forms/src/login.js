import { useState } from "react";
let users = [
  { uname: "Preeti", pwd: "12345" },
  { uname: "Tarun", pwd: "12345" },
  { uname: "Gayatri", pwd: "12345" },
];
const Login = () => {
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const [msg, setMsg] = useState("");
  const Validate = (e) => {
    e.preventDefault();
    let user = users.find((u) => u.uname === uname && u.pwd === pwd);
    if (user != null) {
      setMsg("Valid User!!");
    } else {
      setMsg("Invalid User!!");
    }
  };
  return (
    <div className="container">
      <form onSubmit={Validate}>
        <table className="table table-bordered" style={{ width: "400px" }}>
          <tr>
            <td>Username</td>
            <td>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setUname(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPwd(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <input
                type="submit"
                value="Login"
                className="btn btn-info"
              ></input>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <span className="text-warning">{msg}</span>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};
export default Login;
