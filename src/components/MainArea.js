import React, { Component } from "react";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import Instagram from "./photos/Instagram";
import "../stylesheets/background.css";

export default class MainArea extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentTag: ""
		};

		this.changeTag = this.changeTag.bind(this);
	}

	changeTag(execID) {

		switch(execID) {
			case 1:
				this.setState({ currentTag: "pomeranian" });
				return;
			case 2:
				this.setState({ currentTag: "travelgram" });
				return;
			case 3:
				this.setState({ currentTag: "switzerland" });
				return;
			case 4:
				this.setState({ currentTag: "wanderlusting" });
				return;
			case 5:
				this.setState({ currentTag: "photographylovers" });
				return;
			default:
				this.setState({ currentTag: "" });
				return;
		}
		
	}

	render() {
		return (
			<div className="container">
			<div className="container-2">
				<MainLeft className="container-left" changeTag={this.changeTag} />
				<MainRight className="container-right" />
			</div>
			<div className="container-3">
				<Instagram tag={this.state.currentTag} />
			</div>
			</div>
		);
	}
}
