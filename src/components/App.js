import React, { Component } from "react";
import { Route } from 'react-router-dom';
import "./App.css";
import MainArea from "./MainArea";
import Navigation from "./Navigation";
import "../stylesheets/flex.css";
import Instagram from './photos/Instagram'
import MapContainer from './maps/MapContainer'


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
      <div className="height_full">
        <Navigation />


        <Route name="executives" path="/" component={MainArea} exact/>
        <Route path="/info" component={Info}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/instagram" component={Instagram}/>
        <Route path="/map" component={MapContainer}/>
      </div>
    );
  }
}

export default App;
