import React, { Component } from "react";
import Executives from "./Executives.js";
import Stores from "./Stores";

export default class MainLeft extends Component {
	constructor(props) {
		super(props);

		this.state = {
			content: "Executives",
			execID: null
		};

		this.displayStore = this.displayStore.bind(this);
	}

	displayStore(execID) {

		if (execID === null){
			this.setState({
				content: "Executives",
				execID: null
			});

		} else {
			this.setState({
				content: "Stores",
				execID: execID
			});

		}

		
	}

	render() {
		let Show;
		switch (this.state.content) {
			case "Executives":
				Show = (
					<Executives
						changeTag={this.props.changeTag}
						displayStore={this.displayStore}
					/>
				);
				break;
			case "Stores":
				Show = (
					<Stores
						changeTagStore={this.props.changeTagStore}
						execID={this.state.execID}
						displayStore={this.displayStore}
					/>
				);
				break;
			default:
				Show = (
					<Executives
						changeTag={this.props.changeTag}
						displayStore={this.displayStore}
					/>
				);
				break;
		}

		return <div>{Show}</div>;
	}
}
