import React, { Component } from "react";

class Certifications extends Component {
  state = {
    loading: true,
    person_link: null,
    cert_arr: []
  };

  async componentDidMount() {
    const url = "https://api.myjson.com/bins/rudm0";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person_link: data, loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.person_link ? (
          <div>Not loaded....</div>
        ) : (
          <div className="whole_job_component">
            <p>Certifications(%Verified)</p>
            <p>
              {this.state.person_link.Certificaciones.map(function(
                cert_arr,
                index
              ) {
                return (
                  <div>
                    <div className="edu_card">
                      <h2>{cert_arr.nombre}</h2>
                      <div className="in_educard">
                        <p> {cert_arr.Empresaemisora}</p>
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

export default Certifications;
