import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  //handler
  setCount = () => {
    //setState use to update the state data
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.setCount}>Count</button>
      </>
    );
  }
}
export default Counter;
