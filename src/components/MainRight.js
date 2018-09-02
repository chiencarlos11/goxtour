import React, { Component } from "react";
import Map from "./Map";
import MapContainer from './maps/MapContainer'

export default class MainRight extends Component {
    render() {

    	if (this.props.selectedExec !== null){
    		console.log("Drawing Map")
    		return <MapContainer />;
    	} else {
    		return <Map />;
    	}

    }
}