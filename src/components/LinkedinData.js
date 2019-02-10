import React, { Component } from "react";

class LinkedinData extends Component {
  state = {
    loading: true,
    person_link: null
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
          <div className="">
            <div className="panel_container">
              <div className="panel_card">
                <div className="in_panelcard">
                  <h2 className="title_tupanel">Tu panel</h2>
                  <p>
                    {" "}
                    Quien ha visto tu perfil{" "}
                    {this.state.person_link.panel.visualizaciones}
                  </p>
                  <p>
                    {" "}
                    Visualizaciones del artículo
                    {this.state.person_link.panel.visualizaciones}
                  </p>
                  <p>
                    {" "}
                    apariciones en búsquedas
                    {this.state.person_link.panel.visualizaciones}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default LinkedinData;
