import React, { Component } from "react";
import "./App.css";
import Jobs from "./component/jobs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jobs />
        <button className="btn btn-primary"> Classic</button>
      </div>
    );
  }
}

export default App;
