import React, { Component } from "react";
import { Route } from "react-router-dom";
import MainArea from "./MainArea";
import Navigation from "./Navigation";
import Instagram from "./photos/Instagram";
import MapContainer from "./maps/MapContainer";
// import "../stylesheets/navigation.css";
import logo from "../static/goX.png";
import "../stylesheets/grid.css";

const Info = () => (
  <div>
    <ul>
      <li>Info</li>
    </ul>
  </div>
);

const Contact = () => (
  <div>
    <ul>
      <li>Contact</li>
    </ul>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTag: ""
    };

    this.changeTag = this.changeTag.bind(this);
  }

  changeTag() {
    this.setState({ currentTag: "pomeranian" });
  }

  render() {
    return (
      <div className="container">
        {/*<header classNam="item-a">
          <h1 className="logo">
            <img src={logo} height="80" alt="" />
          </h1>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <nav>
            <ul>
              <li>
                <a href="#">Cities</a>
              </li>
              <li>
                <a href="#">Stores</a>
              </li>
              <li>
                <a href="/">Executives</a>
              </li>
              <li>
                <a href="contact">Contact</a>
              </li>
            </ul>
          </nav>
          <label for="nav-toggle" className="nav-toggle-label">
            <span />
          </label>
        </header>*/}

        <div >
          Hello World
        </div>
        <div >
          Hello World
        </div>
        <div >
          Hello World
        </div>
        <div >
          Hello World
        </div>
        <div >
          Hello World
        </div>

        {/*<div className="content" />
        <Route name="executives" path="/" component={MainArea} exact />
        <Route path="/instagram" component={Instagram} />
        <Route path="/info" component={Info} />
        <Route path="/contact" component={Contact} />
        <Route path="/map" component={MapContainer} />*/}
      </div>
    );
  }
}

export default App;
