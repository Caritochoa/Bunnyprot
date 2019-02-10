import React, { Component } from "react";
import ReactDOM from "react-dom";
import TorreBio from "./TorreBio";
import LinkedinData from "./LinkedinData";
import { Link } from "react-router-dom";

const node = ReactDOM.findDOMNode(this);

class Header extends Component {
  render() {
    function bring_linkedin() {
      const parent_panel = document.getElementsByClassName(
        "recomendation_section"
      );
    }
    return (
      <div className="container">
        <nav className="menu">
          <a href="#">
            <h1 className="menu__logo">Torre</h1>
          </a>

          <form className="header_form" method="POST">
            <input className="menu_search_input" type="text" />
          </form>

          <div className="menu__right">
            <ul classname="menu__list">
              <li className="menu__list-item">
                <a className="menu__link" href="#">
                  Find Talent
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__link" href="#">
                  Find jobs/gigs
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__link" href="#">
                  your bio
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__link" href="#">
                  Remoter
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Second header section */}

        <div className="container_second">
          <nav className="menu_2">
            <ul classname="menu__listb">
              <li className="menu__list-item">
                <a className="menu__link" href="#">
                  CAROLINA
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__link" href="#">
                  RECOMMENDATIONS
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__link" href="#">
                  JOBS
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__link" href="#">
                  EDUCATION
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__link" onClick={bring_linkedin} href="#">
                  <Link to="/mixed">IMPORT FROM LINKEDIN</Link>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
