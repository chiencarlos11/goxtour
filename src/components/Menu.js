import React, { Component } from "react";
import ExecMenu from "./menu/ExecMenu.js";
import Stores from "./stores/Stores";

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "Executives",
      execID: this.props.execId
    };

    this.displayStore = this.displayStore.bind(this);
  }

  displayStore(execID) {
    if (execID === null) {
      this.setState({
        content: "Executives",
        execID: null
      });
    } else {
      this.setState({
        content: "Executives",
        execID: execID
      });
    }
  }

  render() {
    let Show;
    switch (this.state.content) {
      case "Executives":
        Show = (
          <ExecMenu
            execId={this.state.execID}
            changeTag={this.props.changeTag}
            displayStore={this.displayStore}
          />
        );
        break;
      case "Stores":
        Show = (
          <Stores
            changeTagStore={this.props.changeTagStore}
            execID={this.state.execID}
            displayStore={this.displayStore}
          />
        );
        break;
      default:
        Show = (
          <ExecMenu
            changeTag={this.props.changeTag}
            displayStore={this.displayStore}
          />
        );
        break;
    }

    return <div className="height_full">{Show}</div>;
  }
}
