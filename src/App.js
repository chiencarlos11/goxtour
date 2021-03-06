import React, { Component } from "react";
import "./App.css";
import MapContainer from "./components/maps/MapContainer";
import Instagram from "./components/photos/Instagram";
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import MenuMobile from "./components/MenuMobile";
import BrowserDetection from "react-browser-detection";
import Gallery from "./components/photos/Gallery";
import Stats from "./components/stats/Stats";
import Voting from "./components/voting/Voting";
import Info from "./components/info/Info";
import { isMobile } from "react-device-detect";

import logo from "./static/goX.png";
import logoMain from "./static/goXtour_logo.png";
import homeIcon from "./static/Mobile/home.png";
import galleryIcon from "./static/Mobile/gallery.png";
import infoIcon from "./static/Mobile/info.png";
import homeIconActive from "./static/Mobile/homeActive.png";
import galleryIconActive from "./static/Mobile/galleryActive.png";
import infoIconActive from "./static/Mobile/infoActive.png";

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
      location: {},
      display_mobile: "HOME",
      currentHomeIcon: homeIconActive,
      currentInfoIcon: infoIcon,
      currentGalleryIcon: galleryIcon
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
    edge: () => {
      console.log("This is EDGE");
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
    var url = "https://s3.amazonaws.com/goeasy2018/";

    // Get Instagram Data
    fetch(url + "instagram.json")
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
    fetch(url + "execs.json")
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
    fetch(url + "branches.json")
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
      this.setState({ selectedExec: -1 });
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
    } else if (storeId === "__show_all__") {
      this.setState({ selectedExec: -1 });
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

  getMobileMain() {
    let main;

    if (this.state.display_mobile == "HOME") {
      main = (
        <MenuMobile
          changeTag={this.changeTag}
          changeStoreTag={this.changeStoreTag}
          execsData={this.state.execsData}
          storesData={this.state.storesData}
          content={this.state.display_main}
          execId={this.state.selectedExec}
        />
      );
    } else if (this.state.display_mobile == "GALLERY") {
      main = (
        <div className="mobile_gallery_wrapper">
          <Gallery instagramData={this.state.instagramData} />
        </div>
      );
    } else if (this.state.display_mobile == "EXECS") {
      main = (
        <div className="mobile_home_box">
          <div className="mobileInfoMain mobileFontInfo">
            <p className="mobileFontInfoHeader">How the Site Works</p>
            <p>
              <span className="mobileFontBlue">&#xb7;</span>
              &nbsp;&nbsp;Click on a Tour Member's image on the <u>Home</u> page
              to see where they are and where they’ve visited
            </p>
            <p>
              <span className="mobileFontBlue">&#xb7;</span>
              &nbsp;&nbsp;Click on <u>Gallery</u> to see all pics or videos from
              the Tour
            </p>
            <p>
              <span className="mobileFontBlue">&#xb7;</span>
              &nbsp;&nbsp;Click on <u>Travel Stats</u> to see how far each Tour
              Member has travelled during the week
            </p>
            <br />
            <p className="mobileFontBlue">
              <u>NOTE:</u> Make sure you have your creative hats on when a Tour
              Member visits: Top 3 Best Pics from the Tour will win your branch
              or store $250 for your team and $250 donated to Boys and Girls
              Club on your behalf!
            </p>
          </div>
        </div>
      );
    }

    return main;
  }

  handleMobileNavigation(selected) {
    this.setState({ display_mobile: selected });

    if (selected == "HOME") {
      // TO DO FIX THIS
      window.location.reload();
    }

    if (selected == "EXECS") {
      this.setState({ currentHomeIcon: homeIcon });
      this.setState({ currentGalleryIcon: galleryIcon });
      this.setState({ currentInfoIcon: infoIconActive });
    }

    if (selected == "GALLERY") {
      this.setState({ currentHomeIcon: homeIcon });
      this.setState({ currentGalleryIcon: galleryIconActive });
      this.setState({ currentInfoIcon: infoIcon });
    }
  }

  render() {
    let display = (
      <div style={{color:'white'}}>
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
            {this.getMobileMain()}
            <div className="mobile_footer">
              <div className="mobile_footer_box">
                <div className="mobile_footer_font">
                  <img
                    className="mobile_footer_image"
                    src={this.state.currentHomeIcon}
                    onClick={this.handleMobileNavigation.bind(this, "HOME")}
                  />
                </div>
              </div>
              <div className="mobile_footer_box">
                <div className="mobile_footer_font">
                  <img
                    className="mobile_footer_image"
                    src={this.state.currentGalleryIcon}
                    onClick={this.handleMobileNavigation.bind(this, "GALLERY")}
                  />
                </div>
              </div>
              <div className="mobile_footer_box">
                <div className="mobile_footer_font">
                  <img
                    className="mobile_footer_image"
                    src={this.state.currentInfoIcon}
                    onClick={this.handleMobileNavigation.bind(this, "EXECS")}
                  />
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
                instagramData={this.state.instagramData}
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
      } else if (this.state.display_main === "INFO") {
        display = (
          <div className="height_full">
            <div className="header">
              <Navigation setDisplay={this.setDisplay} />
            </div>
            <Info />
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
