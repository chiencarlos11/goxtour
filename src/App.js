import React, { Component } from "react";
import "./App.css";
import MapContainer from "./components/maps/MapContainer";
import Instagram from "./components/photos/Instagram";
import MobileExecMenu from "./components/menu/MobileExecMenu";
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import BrowserDetection from "react-browser-detection";
import Gallery from "./components/photos/Gallery";
import Stats from "./components/stats/Stats";
import Voting from "./components/voting/Voting";
import { isMobile } from "react-device-detect";

import logo from "./static/goX.png";
import homeIcon from "./static/Mobile/home.png";
import travelIcon from "./static/Mobile/travel3.png";
import galleryIcon from "./static/Mobile/gallery.png";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTags: [],
      selectedExec: -1,
      selectedStore: -1,
      ie_detected: false,
      display_main: "Executives",
      storesData: 0,
      execsData: 0,
      instagramData: 0,
      hasVoted: 0,
      location: {}
    };

    this.changeTag = this.changeTag.bind(this);
    this.changeStoreTag = this.changeStoreTag.bind(this);
    this.setDisplay = this.setDisplay.bind(this);
    this.setVoted = this.setVoted.bind(this);

    this.getData();
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

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextState.storesData &&
      this.state.execsData &&
      this.state.instagramData
    ) {
      return true;
    }

    if (
      this.state.storesData &&
      nextState.execsData &&
      this.state.instagramData
    ) {
      return true;
    }

    if (
      this.state.storesData &&
      this.state.execsData &&
      nextState.instagramData
    ) {
      return true;
    }
    return false;
  }

  getData() {
    const proxyurl = "https://goeasy-cors.herokuapp.com/";
    var url = "https://s3.amazonaws.com/goeasy2018/";

    // Get Instagram Data
    fetch(proxyurl + url + "instagram.json")
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        this.setState({ instagramData: responseData });
        return responseData;
      })
      .catch(err => {
        console.log("Instagram Fetch Error: " + err);
      });

    // Get Exec Data
    fetch(proxyurl + url + "execs.json")
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        this.setState({ execsData: responseData });
        return responseData;
      })
      .catch(err => {
        console.log("Exec Fetch Error: " + err);
      });

    // Get Store Data
    fetch(proxyurl + url + "branches.json")
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        this.setState({ storesData: responseData });
        return responseData;
      })
      .catch(err => {
        console.log("Store Fetch Error: " + err);
      });
  }

  changeTag(execID) {
    this.setState({ selectedExec: execID });

    if (execID === null) {
      this.setState({ currentTags: [] });
      return;
    } else if (execID === "__show_all__") {
      this.setState({ currentTags: ["__show_all__"] });
      return;
    }

    //Returning all stores that matches execID
    let exec_tag = this.state.execsData.execs.find(x => x.id === execID).tag;

    //Getting a list of all tags
    let tags = [];
    tags.push(exec_tag);

    //Update currentTag with array of tags
    this.setState({ currentTags: tags });

    //Updating current Exec
    this.setState({ selectedExec: execID });
    this.setState({ selectedStore: -1 });
  }

  changeStoreTag(storeId) {
    console.log("changeStoreTag: " + storeId);

    if (storeId === null) {
      this.setState({ currentTags: [] });
    } else {
      console.log("update selectedStore");

      this.setState({ selectedStore: storeId });
      this.setState({ selectedExec: -1 });
    }
  }

  setDisplay(display) {
    this.setState({ display_main: display });

    /*
    // To Reset Instgram and Map
    // Need to Reset Menu too!!!

    if (display == "Executives") {
      this.changeTag("__show_all__");
    }
*/
  }

  setVoted(imageId) {
    this.setState({ hasVoted: imageId });
  }

  render() {
    let display = (
      <div>
        <h1>We are Sorry!</h1>{" "}
        <h3>This website is optimized for Chrome, Firefox or Safari.</h3>
      </div>
    );

    if (isMobile && !this.state.ie_detected) {
      document.body.style.height = "100%";

      if (
        !this.state.instagramData ||
        !this.state.execsData ||
        !this.state.storesData
      ) {
        display = <div>Loading...</div>;
      } else {
        display = (
          <div className="mobile_container">
            <div className="mobile_navbar">
              <div className="mobile_navbar_logo">
                <img
                  className="mobile_navbar_image"
                  src={logo}
                  alt=""
                  onClick={this.handleLogoClicked}
                />
              </div>

              <div className="mobile_separator_row" />
            </div>
            <div className="mobile_main">
              <MobileExecMenu
                changeTag={this.changeTag}
                changeStoreTag={this.changeStoreTag}
                execsData={this.state.execsData}
                storesData={this.state.storesData}
                content={this.state.display_main}
              />
            </div>
            <div className="mobile_footer">
              <div className="mobile_footer_box">
                <div className="mobile_footer_font">
                  <img className="mobile_footer_image" src={homeIcon} />
                </div>
              </div>
              <div className="mobile_footer_box">
                <div className="mobile_footer_font">
                  <img className="mobile_footer_image" src={galleryIcon} />
                </div>
              </div>
              <div className="mobile_footer_box">
                <div className="mobile_footer_font">
                  <img className="mobile_footer_image" src={travelIcon} />
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    if (!isMobile && !this.state.ie_detected) {
      document.body.style.height = "100%";
      display = (
        <div className="container">
          <div className="header">
            <Navigation setDisplay={this.setDisplay} />
          </div>

          <div className="main_both">
            <div className="menuBox">
              <Menu
                changeTag={this.changeTag}
                changeStoreTag={this.changeStoreTag}
                execsData={this.state.execsData}
                storesData={this.state.storesData}
                content={this.state.display_main}
              />
            </div>
            <div className="mapBox">
              <MapContainer
                execId={this.state.selectedExec}
                storeId={this.state.selectedStore}
                execsData={this.state.execsData}
                storesData={this.state.storesData}
              />
            </div>
          </div>

          <div className="footer">
            <Instagram
              access_token={this.props.access_token}
              tags={this.state.currentTags}
              instagramData={this.state.instagramData}
              storeId={this.state.selectedStore}
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
            <Gallery instagramData={this.state.instagramData} />
          </div>
        );
      } else if (this.state.display_main === "STATS") {
        document.body.style.height = "unset";
        display = (
          <div>
            <div className="header">
              <Navigation setDisplay={this.setDisplay} />
            </div>
            <div className="StatsBox">
              <Stats
                changeTag={this.changeTag}
                changeTagStore={this.changeTagStore}
                execsData={this.state.execsData}
                storesData={this.state.storesData}
                content={this.state.display_main}
              />
            </div>
          </div>
        );
      } else if (this.state.display_main === "VOTING") {
        display = (
          <div className="height_full">
            <div className="header">
              <Navigation setDisplay={this.setDisplay} />
            </div>
            <Voting hasVoted={this.state.hasVoted} castVote={this.setVoted} />
          </div>
        );
      }

      if (
        !this.state.instagramData ||
        !this.state.execsData ||
        !this.state.storesData
      ) {
        display = <div>Loading...</div>;
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
