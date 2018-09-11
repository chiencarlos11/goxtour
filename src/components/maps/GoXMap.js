import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import GoXMarker from "./GoXMarker";
const mapStyle = require("./style2.json");

function getStoreMarkers(data) {
  const markers = data.stores.map(store => {
    let marker = (
      <GoXMarker
        key={store.Id}
        location={{ lat: store.Latitude, lng: store.Longitude }}
        state={store.State}
        icon={store.Type}
      />
    );
    return marker;
  });

  return markers;
}

function getExecMarkers(data) {
  const execMarkers = data.execs.map(exec => {
    let execs = (
      <GoXMarker
        key={exec.id}
        location={{ lat: exec.latitude, lng: exec.longitude }}
        state={"active"}
        icon={exec.id}
      />
    );
    return execs;
  });

  return execMarkers;
}

function getLocation(execId, data) {
  var latitude = 44.6;
  var longitude = -79.639026;

  // Find Exec
  for (var i = 0; i < data.execs.length; i++) {
    var exec = data.execs[i];
    if (exec.id == execId) {
      latitude = exec.latitude;
      longitude = exec.longitude;
    }
  }

  return { lat: latitude, lng: longitude };
}

// GoogleMaps Options
const options = {
  //minZoom: 8,
  maxZoom: 20,
  styles: mapStyle
};

// Google Maps Component
const GoXMap = withScriptjs(
  withGoogleMap(props => {
    return (
      <GoogleMap
        defaultZoom={8}
        center={getLocation(props.execId, props.execsData)}
        options={options}
      >
        {getStoreMarkers(props.storesData)}
        {getExecMarkers(props.execsData)}
      </GoogleMap>
    );
  })
);

export default GoXMap;
