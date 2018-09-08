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
  constructor(props) {
    super(props);

    this.state = {
      currentExecId: this.props.execId
    };
  }

  handleClick(id) {
    this.props.changeTag(id);
    this.props.displayStore(id);
    this.setState({ currentExecId: id });
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
      default:
        return execIcon_0;
    }
  }

  getRender() {
    if (this.state.currentExecId >= 0) {
      return this.getStores();
    } else {
      return this.getExecs();
    }
  }

  getExecs() {
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

    return Execs;
  }

  getStores() {
    let exec = execData.avatars[this.state.currentExecId];
    let StoreList = exec.stores.map(e => <div key={e}>{e}</div>);

    return (
      <div>
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
        <br />
        <div className="storeListContainer">{StoreList}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="container-menu">
        <div className="menu-top">
          <img
            className="image-top"
            src={logo}
            alt=""
            onClick={this.handleClick.bind(this, "__show_all__")}
          />
        </div>
        <div className="menu-main">{this.getRender()}</div>
      </div>
    );
  }
}

export default ExecMenu;
