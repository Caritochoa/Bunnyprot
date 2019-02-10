import React, { Component } from "react";

class Education extends Component {
  state = {
    loading: true,
    person: null,
    edu_arr: []
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
            <p>Education(%Verified)</p>
            <p>
              {this.state.person.education.map(function(edu_arr, index) {
                return (
                  <div>
                    <div className="edu_card">
                      <h2>{edu_arr.name}</h2>
                      <div className="in_educard">
                        <p>
                          {" "}
                          {edu_arr.fromMonth} {edu_arr.fromYear} -
                          {edu_arr.toMonth} {edu_arr.toYear}
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

export default Education;
