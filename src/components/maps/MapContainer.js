import React from "react";
import GoXMap from "./GoXMap";

export default class MapContainer extends React.Component {
  render() {
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
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCXX8Kun9zMx0KFD7cXTxHCc-4UEW_-LqE&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ width: `100%`, height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
