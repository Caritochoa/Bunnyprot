import React, { Component } from "react";

class Jobs extends Component {
  state = {
    loading: true,
    person: null,
    job_array: []
  };

  async componentDidMount() {
    const url = "https://torre.bio/api/bios/carolinaochoa";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data, loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>Not loaded....</div>
        ) : (
          <div className="whole_job_component">
            <p>Jobs({this.state.person.person.stats.verifiers}%Verified)</p>
            <p>
              {this.state.person.jobs.map(function(job_arr, index) {
                return (
                  <div>
                    <div className="jobcard">
                      <h2>{job_arr.role}</h2>
                      <p>{job_arr.organizations[0].name}</p>
                      <div className="in_jobcard">
                        <p>
                          {" "}
                          {job_arr.fromMonth} {job_arr.fromYear} -
                          {job_arr.toMonth} {job_arr.toYear}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Jobs;
