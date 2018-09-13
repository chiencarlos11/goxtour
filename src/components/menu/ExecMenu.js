import React, { Component } from "react";
import "./execMenu.css";

import logo from "../../static/goXtour_logo.png";
import execIcon_0 from "../../static/ExecPortraits/1_Ingram_profile.png";
import execIcon_1 from "../../static/ExecPortraits/2_Mullins_profile.png";
import execIcon_2 from "../../static/ExecPortraits/3_Fiederer_profile.png";
import execIcon_3 from "../../static/ExecPortraits/4_Appel_profile.png";
import execIcon_4 from "../../static/ExecPortraits/5_Yielding_profile.png";
import execIcon_5 from "../../static/ExecPortraits/6_Pennell_profile.png";
import execIcon_6 from "../../static/ExecPortraits/7_Poole_profile.png";
import execIcon_7 from "../../static/ExecPortraits/8_Cooper_profile.png";
import execIcon_8 from "../../static/ExecPortraits/9_McGuire_profile.png";
import execIcon_9 from "../../static/ExecPortraits/10_Nijjar_profile.png";
import execIcon_10 from "../../static/ExecPortraits/11_Amjad_profile.png";
import execIcon_11 from "../../static/ExecPortraits/12_Ross_profile.png";
import execIcon_12 from "../../static/ExecPortraits/13_Raj_profile.png";
import execIcon_13 from "../../static/ExecPortraits/14_Ellens_profile.png";

class ExecMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentExecId: this.props.execId,
      execsData: this.props.execsData
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
      case 5:
        return execIcon_5;
      case 6:
        return execIcon_6;
      case 7:
        return execIcon_7;
      case 8:
        return execIcon_8;
      case 9:
        return execIcon_9;
      case 10:
        return execIcon_10;
      case 11:
        return execIcon_11;
      case 12:
        return execIcon_12;
      case 13:
        return execIcon_13;
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
    let Execs = this.state.execsData.execs.map(exec => (
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
    let exec = this.state.execsData.execs.find(
      x => x.id === this.state.currentExecId
    );

    let StoreList;
    if (exec.stores.length > 0) {
      StoreList = exec.stores[0].map(e => (
        <div key={e} className="execStoreLabel">
          {e}
        </div>
      ));
    }

    return (
      <div>
        <div className="menu-cell" key={exec.id}>
          <div className="execImageBox">
            <img className="execImage" src={this.getPortrait(exec.id)} alt="" />
          </div>
          <div className="execNameBox">
            <div className="execName">{exec.name}</div>
            <div className="execTitle">{exec.title}</div>
          </div>
        </div>
        <br />
        <div className="provinceContainer">Visiting: {exec.province}</div>
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
