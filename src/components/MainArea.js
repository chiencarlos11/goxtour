import React, { Component } from "react";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import "../stylesheets/background.css";
import "../stylesheets/flex.css";

export default class MainArea extends Component {
	render() {
		return (

			<div className="container-2">
				<MainLeft className="container-left" />
				<MainRight className="container-right" />
			</div>

		);
	}
}
