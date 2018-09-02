import React, { Component } from "react";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import Instagram from "./photos/Instagram";

const storesData = require("../data/stores.json");
const avatarsData = require("../data/avatars.json");


export default class MainArea extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentTags: [],
			selectedExec: null
		};

		this.changeTag = this.changeTag.bind(this);
		this.changeTagStore = this.changeTagStore.bind(this);
	}

	changeTag(execID) {

		if (execID === null){
			this.setState({ currentTags: [] });
			return;
		}

		//Returning all stores that matches execID
		let stores = avatarsData.avatars[execID].stores;

		//Getting a list of all tags
		let tags = [];
		for (var store of stores) {
			tags.push(storesData.stores[store].tag);
		}

		//Update currentTag with array of tags
		this.setState({ currentTags: tags });

		//Updating current Exec
		this.setState({ selectedExec: execID });
	}

	changeTagStore(storeId) {
		if (storeId === null){
			console.log("setting currentTags to empty")
			this.setState({ currentTags: [] });

		} else{
			this.setState({ currentTags: [storesData.stores[storeId].tag] });
		}
		
	}

	render() {
		return (
			<div>
				<div>
					<MainLeft className="item-b"
						changeTag={this.changeTag}
						changeTagStore={this.changeTagStore}
					/>
					<MainRight className="item-c" selectedExec={this.state.selectedExec} />
				</div>
				{/*<div className="container-3">
					<Instagram tags={this.state.currentTags} />
				</div>*/}
			</div>
		);
	}
}
