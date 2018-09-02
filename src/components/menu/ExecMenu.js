import React, { Component } from "react";
import "./execMenu.css";

//import execIcon_0 from "./images/Exec_icon_1.png";
import logo from "../../static/goXtour_logo.png";
import execIcon_0 from "../../static/ExecPortraits/DavidIngram.png";
import execIcon_1 from "../../static/ExecPortraits/JasonAppel.png";
import execIcon_2 from "../../static/ExecPortraits/JasonMullims.png";
import execIcon_3 from "../../static/ExecPortraits/ShanePennell.png";
import execIcon_4 from "../../static/ExecPortraits/StevenPoole.png";

const execData = require("../../data/avatars.json");

class ExecMenu extends Component {
  handleClick(id) {
    this.props.changeTag(id);
    this.props.displayStore(id);
  }

  getPortrait(id) {
    switch (id) {
      case 0:
        return execIcon_0;
      case 1:
        return execIcon_1;
      case 2:
        return execIcon_2;
      case 3:
        return execIcon_3;
      case 4:
        return execIcon_4;
    }
  }

  render() {
    let Execs = execData.avatars.map(exec => (
      <div
        className="menu-cell"
        key={exec.id}
        onClick={this.handleClick.bind(this, exec.id)}
      >
        <div className="execImageBox">
          <img className="execImage" src={this.getPortrait(exec.id)} alt="" />
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
          <img className="image-top" src={logo} alt="" />
        </div>
        <div className="menu-main">{Execs}</div>
      </div>
    );
  }
}

export default ExecMenu;
