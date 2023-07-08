import React, { Component } from "react";
import Calcu from "./component/Calcu";

export default class App extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <Calcu></Calcu>
      </div>
    );
  }
}
