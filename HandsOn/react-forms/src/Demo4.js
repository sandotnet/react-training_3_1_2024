import { useState } from "react";
const MyForm = () => {
  const [uname, setUname] = useState("");
  const [age, setAge] = useState(0);
  const [msg, setMsg] = useState("");
  const handleName = (event) => {
    setUname(event.target.value);
  };
  const handleAge = (event) => {
    setAge(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg(`Hello ${uname} you are ${age} years old`);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <table className="table">
          <tr>
            <td>Enter Name</td>
            <td>
              <input
                type="text"
                className="form-control"
                value={uname}
                onChange={handleName}
              />
            </td>
          </tr>
          <tr>
            <td>Enter Age</td>
            <td>
              <input
                type="number"
                className="form-control"
                value={age}
                onChange={handleAge}
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
          <tr>
            <td colSpan={2}>
              <span className="text-primary">{msg}</span>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};
export default MyForm;
