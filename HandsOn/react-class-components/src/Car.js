import React from "react";
class Car extends React.Component {
  constructor(props) {
    super(props);
    //define state
    this.state = {
      model: "Mg Hector",
      price: 2300000,
      color: "red",
    };
  }
  render() {
    return (
      <div>
        <h3>Model:{this.state.model}</h3>
        <h3>Price:{this.state.price}</h3>
        <h3>Color:{this.state.color}</h3>
      </div>
    );
  }
}
export default Car;
