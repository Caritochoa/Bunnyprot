import React, { Component } from "react";
import alex from "../alex.png";
import Jobs from "./Jobs";
import Education from "./Education";
import Header from "./Header";
import LinkedinData from "./LinkedinData";
import Certifications from "./Certifications";

class Mixed extends Component {
  state = {
    loading: true,
    person: null
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
          <div className="whole_container">
            <div className="Header_div">
              <Header />
            </div>
            <div className="profile-container">
              <img
                className="prof_img"
                src={this.state.person.person.picture}
              />
              <h1>Hello, my name is {this.state.person.person.name}</h1>
              <h2>{this.state.person.person.professionalHeadline}</h2>
              <h2>{this.state.person.person.weight}</h2>
              <p>reputation weight</p>
              <button className="button_torre">GET SIGNALED</button>
              <button className="button_torre">GET RECOMENDED</button>
              <button className="button_torre">MESSAGES</button>
              <LinkedinData />
            </div>
            {/* From here Recomendation section */}
            <div className="recomendations_section">
              <div className="text_recomendation">
                <p>Interested in remote opportunities and jobs</p>
                <p>Remoter(currently in Bogotá D.C Colombia)</p>
              </div>
              <div className="cards_recomendation_section">
                <div className="alex_card">
                  <img src={alex} />
                  <div className="colorfringe">
                    <p>Recommends Carolina </p>
                    <p> for Early adopter</p>
                  </div>
                  <p>Alexander is/was Carolina's supllier for</p>
                  <p>hours</p>
                  <p>
                    Recomendation weight: {this.state.person.person.weight}{" "}
                  </p>
                </div>
              </div>
              {/*From here Weight section */}
              <div className="weight_sec">
                <img
                  className="prof_img"
                  src={this.state.person.person.picture}
                />

                {/* screen split section  for weight text*/}
                <div className="split">
                  <div className="split_left">
                    <div className="centered_text_weight">
                      <p>
                        VIEW ALL RECOMMENDATIONS RECEIVED(
                        {this.state.person.person.stats.recommendations})
                      </p>
                    </div>
                  </div>
                  <div className="split_right">
                    <div className="centered_text_weight">
                      <p>
                        VIEW ALL RECOMMENDATIONS GIVEN(
                        {this.state.person.person.stats.recommendationsSent})
                      </p>
                    </div>
                  </div>
                </div>

                {/* end of the  split section for weight text */}
                <h1>{this.state.person.person.weight}</h1>
                <p>reputation weight</p>
                <p />
                <button className="button_weight">
                  early adopter{this.state.person.person.weight}
                </button>
                <button className="button_weight">Leadership</button>
                <button className="button_weight">Communication</button>
              </div>
            </div>
            {/*Second blue section over */}
            <div className="jobs_container">
              <Jobs />
            </div>

            <div className="Education_container">
              <Education />
            </div>
            <div className="certification_container"> </div>
            <Certifications />
          </div>
        )}
      </div>
    );
  }
}

export default Mixed;
