import React, { Component } from "react";
import TruncateMarkup from "react-truncate-markup";

class Jobs extends Component {
  render() {
    let jobs = this.props.jobs.map(job => {
      return (
        <div
          className="col-md-4 col-sm-6"
          key={job.id}
          style={{ paddingBottom: 5, paddingTop: 5 }}
        >
          <div className="card" style={{ minHeight: 340, topMargin: 10 }}>
            <div className="card-header text-truncate">{job.title}</div>
            <div className="card-body">
              <h4>{job.company}</h4>
              <TruncateMarkup lines={8}>
                <p className="card-text" style={{ minHeight: 50 }}>
                  {job.description}
                </p>
              </TruncateMarkup>

              <a href={job.url} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary text-center">
                  Read More
                </button>
              </a>
            </div>
            <div className="card-footer text-center">
              {job.salary === undefined ? "No salary reported" : job.salary}
            </div>
          </div>
        </div>
      );
    });
    return <div className="row">{jobs}</div>;
  }
}

export default Jobs;
