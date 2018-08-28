import React, { Component } from "react";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import Instagram from "./photos/Instagram";
import "../stylesheets/background.css";
const storesData = require("../data/stores.json");
const avatarsData = require("../data/avatars.json");

export default class MainArea extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentTags: []
		};

		this.changeTag = this.changeTag.bind(this);
		this.changeTagStore = this.changeTagStore.bind(this);
	}

	changeTag(execID) {
		//Returning all stores that matches execID
		let stores = avatarsData.avatars[execID].stores;

		//Getting a list of all tags
		let tags = [];
		for (var store of stores) {
			tags.push(storesData.stores[store].tag);
		}

		//Update currentTag with array of tags
		this.setState({ currentTags: tags });
	}

	changeTagStore(storeId) {
		this.setState({ currentTags: [storesData.stores[storeId].tag] });
	}

	render() {
		return (
			<div className="container">
				<div className="container-2">
					<MainLeft
						className="container-left"
						changeTag={this.changeTag}
						changeTagStore={this.changeTagStore}
					/>
					<MainRight className="container-right" />
				</div>
				<div className="container-3">
					<Instagram tags={this.state.currentTags} />
				</div>
			</div>
		);
	}
}
