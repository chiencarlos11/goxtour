import React, { Component } from "react";
import logo from "../static/goX.png";
import menuLine from "../static/menu-line.png";
import "../stylesheets/navigation.css";

export default class Navigation extends Component {

  constructor(props) {
    super(props);
  }

  setDisplay(display){
    console.log(JSON.stringify(this.props))
    this.props.setDisplay(display);
  }


  render() {
    return (
      <div className="height_full navigation">
        <header>
          <div className="logo">
            <img className="headerImage" src={logo} alt="" />
          </div>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <nav>
            <ul>
              <li>

                <a onClick={this.setDisplay.bind(this,"TOUR MEMBERS")}>Tour Members</a>
              </li>
              <li>
                <a >Tour Stops</a>
              </li>
              <li>
                <a onClick={this.setDisplay.bind(this,"GALLERY")}>Gallery</a>
              </li>
              <li>
                <a >STATS</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Stats</a>
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
