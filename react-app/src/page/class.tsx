import React, { Component } from "react";

class Demo extends Component {
  constructor(props) {
    super(props);
    // Don't do this!
    this.state = { color: "green" };
  }
  componentWillMount() {
    console.log("componentWillMount da chay");
  }

  componentDidMount() {
    console.log("componentDidMount da chay");
  }

  render() {
    console.log("Ham render da duoc chay");
    return <>Hello word</>;
  }
}

export default Demo;
