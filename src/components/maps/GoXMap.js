import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import GoXMarker from "./GoXMarker";
import GoXOverlay from "./GoXOverlay";
const mapStyle = require("./style2.json");
const storesData = require("../../data/stores.json");
const avatarsData = require("../../data/avatars.json");

// Store Pin Markers
const markers = storesData.stores.map(store => {
  let marker = (
    <GoXMarker
      key={store.name}
      location={{ lat: store.latitude, lng: store.longitude }}
      state={store.state}
    />
  );
  return marker;
});

// Avatar Image Overlays (None for now, use Markers instead)
/*
const overlays = avatarsData.avatars.map(avatar => {
  let overlay = (
    <GoXOverlay
      key={avatar.name}
      location={{ lat: avatar.latitude, lng: avatar.longitude }}
      state={avatar.state}
    />
  );
  return overlay;
});
*/

// GoogleMaps Options
const options = {
  minZoom: 8,
  maxZoom: 20,
  styles: mapStyle
};

// Google Maps Component
const GoXMap = withScriptjs(
  withGoogleMap(props => {
    return (
      <GoogleMap
        defaultZoom={14}
        center={{ lat: 43.595105, lng: -79.639026 }}
        options={options}
      >
        {markers}
      </GoogleMap>
    );
  })
);

export default GoXMap;
