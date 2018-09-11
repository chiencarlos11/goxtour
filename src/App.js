import React, { Component } from "react";
import "./App.css";
import MapContainer from "./components/maps/MapContainer";
import Instagram from "./components/photos/Instagram";
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import BrowserDetection from "react-browser-detection";
import Gallery from "./components/photos/Gallery";

const storesData = require("./data/stores.json");
const execsData = require("./data/execs.json");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTags: [],
      selectedExec: -1,
      ie_detected: false,
      display_main: "TOUR MEMBERS"
    };

    this.changeTag = this.changeTag.bind(this);
    this.changeTagStore = this.changeTagStore.bind(this);
    this.setDisplay = this.setDisplay.bind(this);

    //this.getData();
  }

  getData() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = "https://goeasy-gox.azurewebsites.net/data/instagramData.json";

    fetch(proxyurl + url)
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        console.log(responseData);
        return responseData;
      })
      .catch(err => {
        console.log("fetch error" + err);
      });
  }

  browserHandler = {
    ie: () => {
      console.log("This is IE");
      this.setState({ ie_detected: true });
      return null;
    },
    default: browser => {
      console.log("Browser ok.");
      return null;
    }
  };

  changeTag(execID) {
    this.setState({ selectedExec: execID });
    console.log("EXECID = " + this.state.selectedExec);

    if (execID === null) {
      this.setState({ currentTags: [] });
      return;
    } else if (execID === "__show_all__") {
      this.setState({ currentTags: ["__show_all__"] });
      return;
    }

    //Returning all stores that matches execID
    let exec_tag = execsData.execs[execID].tag;

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

  setDisplay(display) {
    this.setState({ display_main: display });
  }

  render() {
    let display = (
      <div>
        <h1>We are Sorry!</h1>{" "}
        <h3>This website is optimized for Chrome, Firefox or Safari.</h3>
      </div>
    );

    if (!this.state.ie_detected) {
      console.log("Displaying non IE");
      document.body.style.height = "100%";
      display = (
        <div className="container">
          <div className="header">
            <Navigation setDisplay={this.setDisplay} />
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
              <MapContainer execId={this.state.selectedExec} />
            </div>
          </div>

          <div className="footer">
            <Instagram
              access_token={this.props.access_token}
              tags={this.state.currentTags}
            />
          </div>
        </div>
      );

      if (this.state.display_main === "GALLERY") {
        document.body.style.height = "unset";
        display = (
          <div className="containerGallery">
            <div className="header">
              <Navigation setDisplay={this.setDisplay} />
            </div>
            <Gallery />
          </div>
        );
      }
    }

    return (
      <div className="height_full">
        <BrowserDetection>{this.browserHandler}</BrowserDetection>
        {display}
      </div>
    );
  }
}

export default App;
