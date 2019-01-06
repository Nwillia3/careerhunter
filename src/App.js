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
    let url = `https://indreed.herokuapp.com/api/jobs?q=${description}&l=${location}&max=40`;
    // const sickoMode = { mode: "cors" };

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
    // .then(data => console.log(data));

    // const api_call = await fetch(url, { mode: "no-cors" });

    // const jobs = await api_call.json();

    // console.log(jobs);
  };

  render() {
    return (
      <div className="Container" style={{ padding: 10 }}>
        <h1>Career Hunter</h1>
        <p>
          In order to use this Desktop only app, you must have Cross Origin
          enabled on your chrome extension. If you dont have a Cross Origin
          Resource extension use
          <span>
            <a
              style={{ textDecoration: "none" }}
              href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span> this link</span>
            </a>
          </span>
        </p>
        <div className="mx-auto" style={{ width: 300, paddingBottom: 30 }}>
          <Form getJobs={this.getJobs} />
        </div>

        <Jobs jobs={this.state.jobs} />
      </div>
    );
  }
}

export default App;
