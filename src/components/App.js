import React, { Component } from "react";
import { Route } from 'react-router-dom';
import "./App.css";
import MainArea from "./MainArea";
import Navigation from "./Navigation";
import "../stylesheets/flex.css";
import Instagram from './photos/Instagram'

const Store = () => (
  <div>
     <ul>
      <li>Store 2330</li>
      <li>Store 2330</li>
      <li>Store 2330</li>
    </ul>
  </div>
);

const City = () => (
  <div>
    <ul>
      <li>San Francisco</li>
      <li>Istanbul</li>
      <li>Tokyo</li>
    </ul>
  </div>
);

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

        <Route name="cities" path="/cities" component={City}/>
        <Route name="stores" path="/stores" component={Store}/>
        <Route name="executives" path="/" component={MainArea} exact/>
        <Route path="/info" component={Info}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/instagram" component={Instagram}/>
      </div>
    );
  }
}

export default App;
