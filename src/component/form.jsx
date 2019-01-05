import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.getJobs}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="location"
            placeholder="Enter location"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
