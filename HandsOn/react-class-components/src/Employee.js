import React from "react";
class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 4343,
      name: "Vikas",
      salary: 56000,
      designation: "developer",
    };
  }
  editEmployee = () => {
    this.setState({
      salary: 65000,
      designation: "Sr Developer",
    });
  };
  render() {
    return (
      <>
        <h3>
          Id:{this.state.id} Name:{this.state.name} Salary:{this.state.salary}{" "}
          Designation:{this.state.designation}
        </h3>
        <button onClick={this.editEmployee}>Edit</button>
      </>
    );
  }
}
export default Employee;
