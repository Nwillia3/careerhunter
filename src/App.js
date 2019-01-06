import React, { Component } from "react";
import "./App.css";
import Jobs from "./component/jobs";
import Form from "./component/form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      jobs: []
    };

    this.getJobs = this.getJobs.bind(this);
  }

  getJobs = async e => {
    e.preventDefault();
    const description = e.target.elements.description.value;
    const location = e.target.elements.location.value;
    let url = `https://indreed.herokuapp.com/api/jobs?q=${description}&l=${location}&max=15`;
    const sickoMode = { mode: "cors" };

    fetch(url, sickoMode)
      .then(res => {
        if (res.status === 200) {
          console.log(res);
          return res.json();
        } else {
          console.log("this is an error", res);
        }
      })
      .then(data => {
        const jobs = data;
        this.setState({ jobs });
      });
    // .then(data => console.log(data));

    // const api_call = await fetch(url, { mode: "no-cors" });

    // const jobs = await api_call.json();

    // console.log(jobs);
  };

  render() {
    return (
      <div className="Container">
        <h1>Career Hunter</h1>
        <div className="mx-auto" style={{ width: 400 }}>
          <Form getJobs={this.getJobs} />
        </div>

        <Jobs jobs={this.state.jobs} />
      </div>
    );
  }
}

export default App;
