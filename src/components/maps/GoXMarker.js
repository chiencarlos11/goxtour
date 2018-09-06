import React from "react";
import { Marker } from "react-google-maps";

import BoatIcon from "./images/BoatLow.png";
import HellicopterIcon from "./images/HelicopterLow.png";
import PlaneIcon from "./images/PlaneLow.png";
import RocketIcon from "./images/RocketLow.png";
import RVIcon from "./images/RVLow.png";

export default class GoXMarker extends React.Component {
  render() {
    if (this.props.state == "active") {
      return <Marker position={this.props.location} icon={PlaneIcon} />;
    } else {
      return null;
    }
  }
}
