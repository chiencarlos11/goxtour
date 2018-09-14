import React, { Component } from "react";
import ExecMenu from "./menu/ExecMenu.js";
import StoreMenu from "./menu/StoreMenu.js";

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: this.props.content,
      execID: this.props.execId,
      execsData: this.props.execsData,
      storesData: this.props.storesData
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

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content != this.state.content) {
      this.setState({ content: nextProps.content });
      return true;
    }

    if (nextState.content != this.state.content) {
      return true;
    }

    return false;
  }

  render() {
    let Show;
    switch (this.state.content) {
      case "Executives":
        Show = (
          <ExecMenu
            execId={this.state.execID}
            changeTag={this.props.changeTag}
            changeStoreTag={this.props.changeStoreTag}
            displayStore={this.displayStore}
            execsData={this.state.execsData}
            showStoreModal={this.props.showStoreModal}
            instagramData={this.props.instagramData}
          />
        );
        break;
      case "Stores":
        Show = (
          <StoreMenu
            changeTag={this.props.changeTag}
            displayStore={this.displayStore}
            execsData={this.state.execsData}
            storesData={this.state.storesData}
            showStoreModal={this.props.showStoreModal}
            instagramData={this.props.instagramData}
          />
        );
        break;
      default:
        Show = (
          <ExecMenu
            changeTag={this.props.changeTag}
            displayStore={this.displayStore}
            execsData={this.state.execsData}
            showStoreModal={this.props.showStoreModal}
            instagramData={this.props.instagramData}
          />
        );
        break;
    }

    return <div className="height_full">{Show}</div>;
  }
}
