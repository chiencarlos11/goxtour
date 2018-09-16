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


  getProgress(){
    if (this.props.totalDistance === null || this.props.totalDistance === 0){
      return 0
    }

    if (this.props.travelled === null || this.props.travelled === 0){
      return 0
    }

    if (this.props.travelled >= this.props.totalDistance){
      return 100
    }

    return (this.props.travelled / this.props.totalDistance) * 100;

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
          percent={this.getProgress()}
          strokeWidth="4"
          strokeColor={this.state.color}
        />
      </div>
    );
  }
}
