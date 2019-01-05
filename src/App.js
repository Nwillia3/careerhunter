import React, { Component } from "react";
import "./App.css";
import Jobs from "./component/jobs";
import Form from "./component/form";

class App extends Component {
  state = {
    jobs: []
  };
  getJobs = async e => {
    e.preventDefault();
    const description = e.target.elements.description.value;
    const location = e.target.elements.location.value;

    const api_call = await fetch(
      `https://indreed.herokuapp.com/api/jobs?q=${description}&l=${location}&max=15`
    );

    const jobs = await api_call.json();

    this.setState({ jobs });
    console.log(jobs);
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to Career Hunter</h1>
        <Form getJobs={this.getJobs} />
        <Jobs jobs={this.state.jobs} />
      </div>
    );
  }
}

export default App;
