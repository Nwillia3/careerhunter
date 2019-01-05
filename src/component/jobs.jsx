import React, { Component } from "react";

class Jobs extends Component {
  constructor() {
    super();
    this.state = {
      jobs: []
    };
  }
  componentDidMount() {
    const url =
      "https://indreed.herokuapp.com/api/jobs?q=JavaScript&country=us";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let jobs = data.map(job => {
          console.log(job);
          return (
            <div className="col-sm-4" key={job.id}>
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title">{job.title}</h5>
                  <span> {job.company}</span>
                  <br />
                  <p className="card-text">{job.summary}</p>
                </div>
              </div>
            </div>
          );
        });
        this.setState({ jobs });
      });
  }
  render() {
    return (
      <div className="container">
        <div className="row">{this.state.jobs}</div>
      </div>
    );
  }
}

export default Jobs;
