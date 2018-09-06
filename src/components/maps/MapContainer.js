import React from "react";
import GoXMap from "./GoXMap";
import "../../stylesheets/map.css";
import mapImage from "../../static/map.png";

export default class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentExecId: this.props.execId
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.execId != this.state.currentExecId) {
      this.setState({ currentExecId: nextProps.execId });
      return true;
    }

    return false;

    console.log("componentUpdate: " + nextProps.execId);
  }

  render() {
    console.log("RENDER: " + this.state.currentExecId);

    if (this.state.currentExecId) {
      return (
        <div
          style={{
            height: "100%",
            width: "100%",
            margin: 0,
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "center",
            padding: 0
          }}
        >
          <GoXMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBYMslb0PPUMXAtUaWJehYQwH-8ebRWklU&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ width: `100%`, height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      );
    } else {
      return (
        <div className="mapImageContainer">
          <img className="mapImage" src={mapImage} />
        </div>
      );
    }
  }
}
