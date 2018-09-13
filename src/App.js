import React, { Component } from "react";
import "./App.css";
import MapContainer from "./components/maps/MapContainer";
import Instagram from "./components/photos/Instagram";
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import BrowserDetection from "react-browser-detection";
import Gallery from "./components/photos/Gallery";
import Stats from "./components/stats/Stats";
import Voting from "./components/voting/Voting";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTags: [],
      selectedExec: -1,
      ie_detected: false,
      display_main: "Executives",
      storesData: 0,
      execsData: 0,
      instagramData: 0,
      hasVoted: 0
    };

    this.changeTag = this.changeTag.bind(this);
    this.changeTagStore = this.changeTagStore.bind(this);
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
  }

  changeTagStore(storeId) {
    if (storeId === null) {
      console.log("setting currentTags to `empty");
      this.setState({ currentTags: [] });
    } else {
      this.setState({
        currentTags: [this.state.storesData.stores[storeId].tag]
      });
    }
  }

  setDisplay(display) {
    this.setState({ display_main: display });
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

    if (!this.state.ie_detected) {
      console.log("Displaying non IE");
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
                changeTagStore={this.changeTagStore}
                execsData={this.state.execsData}
                storesData={this.state.storesData}
                content={this.state.display_main}
              />
            </div>
            <div className="mapBox">
              <MapContainer
                execId={this.state.selectedExec}
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
