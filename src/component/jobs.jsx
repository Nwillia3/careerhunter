import React, { Component } from "react";

class Jobs extends Component {
  render() {
    let jobs = this.props.jobs.map(job => {
      return (
        <div className="col-sm-4" key={job.id}>
          <div className="card" style={{ minHeight: 340, topMargin: 10 }}>
            <div className="card-header">{job.title}</div>
            <div className="card-body">{job.company}</div>
            <div className="card-body">
              <p className="card-text">{job.summary}</p>
            </div>
            <div className="card-footer text-center">{job.salary}</div>
          </div>
        </div>
      );
    });
    return <div className="row">{jobs}</div>;
  }
}

export default Jobs;
