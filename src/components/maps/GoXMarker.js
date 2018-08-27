import React from "react";
import { Marker } from "react-google-maps";
import PinIcon from "./pin.png";

export default class GoXMarker extends React.Component {
  render() {
    if (this.props.state === "active") {
      return <Marker position={this.props.location} icon={PinIcon} />;
    } else {
      return <Marker position={this.props.location} />;
    }
  }
}
