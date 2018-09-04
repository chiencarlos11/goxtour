import React, { Component } from "react";
import logo from "../static/goX.png";
import menuLine from "../static/menu-line.png";
import "../stylesheets/navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <div className="height_full">
        <header>
          <div className="logo">
            <img className="headerImage" src={logo} alt="" />
          </div>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <nav>
            <ul>
              <li>
                <a href="#">Executives</a>
              </li>
              <li>
                <a href="#">Tour Stops</a>
              </li>
            </ul>
          </nav>
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span />
          </label>
        </header>
      </div>
    );
  }
}
