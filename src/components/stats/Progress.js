import React, { Component } from "react";
import { Line, Circle } from "rc-progress";
import "rc-progress/assets/index.css";
import "./Progress.css";

const percentage = 66;

export default class Prog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: this.props.percent,
      color: "#3FC7FA"
    };

  }

  render() {
    const containerStyle = {
      width: "200px"
    };

    return (
      <div>
        <div className="distanceHeader">
          Travelled: {this.props.travelled}
          KM
        </div>
        <Line
          percent={this.props.progress}
          strokeWidth="4"
          strokeColor={this.state.color}
        />
      </div>
    );
  }
}
