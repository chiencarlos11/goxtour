import React, { Component } from "react";
import "./App.css";
import MapContainer from "./components/maps/MapContainer";
import Instagram from "./components/photos/Instagram";
import Navigation from "./components/Navigation";
import Menu from "./components//Menu";

const storesData = require("./data/stores.json");
const avatarsData = require("./data/avatars.json");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTags: [],
      selectedExec: null
    };

    this.changeTag = this.changeTag.bind(this);
    this.changeTagStore = this.changeTagStore.bind(this);
  }

  changeTag(execID) {
    if (execID === null) {
      this.setState({ currentTags: [] });
      return;
    } else if (execID === "__show_all__") {
      this.setState({ currentTags: ["__show_all__"] });
      return;
    }

    //Returning all stores that matches execID
    let exec_tag = avatarsData.avatars[execID].tag;

    //Getting a list of all tags
    let tags = [];
    tags.push(exec_tag);

    //Update currentTag with array of tags
    this.setState({ currentTags: tags });

    //Updating current Exec
    this.setState({ selectedExec: execID });
  }

  changeTagStore(storeId) {
    if (storeId === null) {
      console.log("setting currentTags to `empty");
      this.setState({ currentTags: [] });
    } else {
      this.setState({ currentTags: [storesData.stores[storeId].tag] });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <Navigation />
        </div>
        <div className="main_left">
          <div className="menuBox">
            <Menu
              changeTag={this.changeTag}
              changeTagStore={this.changeTagStore}
            />
          </div>
        </div>

        <div className="main_right">
          <div className="mapBox">
            <MapContainer />
          </div>
        </div>

        <div className="footer">
          <Instagram access_token={this.props.access_token} tags={this.state.currentTags} />
        </div>
      </div>
    );
  }
}

export default App;
