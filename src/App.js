import React, { Component } from "react";
import "./App.css";
import Jobs from "./component/jobs";
import Form from "./component/form";
import Spinner from "./component/Spinner";

class App extends Component {
  constructor() {
    super();
    this.state = {
      jobs: []
    };

    this.getJobs = this.getJobs.bind(this);
  }

  getJobs = e => {
    e.preventDefault();
    const description = e.target.elements.description.value;
    const location = e.target.elements.location.value;

    let url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}`;
    fetch(url)
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
        console.log(jobs);
        this.setState({ jobs });
      });
  };

  render() {
    const { jobs } = this.state;
    console.log(jobs);
    if (jobs === undefined) {
      return <Spinner />;
    } else {
      return (
        <div className="Container" style={{ padding: 10 }}>
          <h1>Career Hunter</h1>
          <p>Type in a role and a city to find your next job</p>
          <div className="mx-auto" style={{ width: 300, paddingBottom: 30 }}>
            <Form getJobs={this.getJobs} />
          </div>

          <Jobs jobs={jobs} />
        </div>
      );
    }
  }
}

export default App;
