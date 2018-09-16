import React, { Component } from "react";
import "./Stats.css";
import Prog from "./Progress";

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
import execIcon_14 from "../../static/ExecPortraits/15_Gladu_profile.png";
import execIcon_15 from "../../static/ExecPortraits/16_Ellis_profile.png";
import execIcon_16 from "../../static/ExecPortraits/17_Anzini_profile.png";

class Stats extends Component {
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
      case 14:
        return execIcon_14;
      case 15:
        return execIcon_15;
      case 16:
        return execIcon_16;
      default:
        return execIcon_0;
    }
  }

  getRender() {
    return this.getExecs();
  }

  getExecs() {
    let Execs = this.state.execsData.execs.map(exec => (
      <div className="statsCell" key={exec.id}>
        <div className="statsBox1">
          <img className="execImage" src={this.getPortrait(exec.id)} alt="" />
        </div>
        <div className="statsBox2">
          <Prog travelled={exec.currentDistance} progress={(exec.currentDistance / exec.totalDistance) * 100} />
          <div className="execNameStats">{exec.name}</div>
          <div className="execTitleStats">{exec.province}</div>
        </div>
      </div>
    ));

    return Execs;
  }

  render() {
    return (
      <div className="statsContainer">
        <div className="statsMain">{this.getRender()}</div>
      </div>
    );
  }
}

export default Stats;
