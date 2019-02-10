import React, { Component } from "react";
import TorreBio from "./components/TorreBio";
import Header from "./components/Header";
import LinkedinData from "./components/LinkedinData";
import Certifications from "./components/Certifications";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "./header.css";
import "./torrebio.css";
import "./jobs.css";
import "./education.css";
import "./linkedindata.css";
import Mixed from "./components/Mixed";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route path="/" component={TorreBio} exact />
              <Route path="/mixed" component={Mixed} />
            </Switch>
          </div>
        </Router>
        {/*}
        <TorreBio />
        <LinkedinData />
        <Certifications />
    */}
      </div>
    );
  }
}

export default App;
