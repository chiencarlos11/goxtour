import React, { Component } from "react";
import "./execMenu.css";
import logo from "./goXtour_logo.png";
import execIcon_1 from "./images/Exec_icon_1.png";

const execData = require("../../data/avatars.json");

class ExecMenu extends Component {
  handleClick(id) {
    this.props.changeTag(id);
    this.props.displayStore(id);
  }

  render() {
    let Execs = execData.avatars.map(exec => (
      <div className="menu-cell" key={exec.id} onClick={this.handleClick.bind(this, exec.id)}>
        <div className="execImageBox">
          <img className="execImage" src={execIcon_1} alt=""/>
        </div>
        <div className="execNameBox">
          <div className="execName">{exec.name}</div>
          <div className="execTitle">{exec.title}</div>
        </div>
      </div>
    ));

    return (
      <div className="container-menu">
        <div className="menu-top">
          <img className="image-top" src={logo} alt=""/>
        </div>
        <div className="menu-main">{Execs}</div>
      </div>
    );
  }
}

export default ExecMenu;
