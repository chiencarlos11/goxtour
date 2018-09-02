import React, { Component } from "react";
import Executive from "./Executive.js";
import logo from "../static/goXtour_logo.png";
const avatarsData = require("../data/avatars.json");

export default class Executives extends Component {
  handleClick(id) {
    this.props.changeTag(id);
    this.props.displayStore(id);
  }

  render() {
    let Avatars = avatarsData.avatars.map(avatar => (
      <li
        key={avatar.id}
        onClick={this.handleClick.bind(this, avatar.id)}
      >
        <Executive name={avatar.name} title={avatar.title} />
      </li>
    ));

    return (
      <ul className="executive_box">
        <img className="logo2" src={logo} width="150" alt="" onClick={this.handleClick.bind(this, null)} />
        {Avatars}
      </ul>
    );
  }
}
