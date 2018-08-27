import React, { Component } from "react";
import Executives from "./Executives.js";
import Stores from './Stores'

export default class MainLeft extends Component {

	constructor(props){
		super(props);

		this.state = {
			content: 'Executives',
			execID:'1'
		}

		this.displayStore = this.displayStore.bind(this)
	}

	displayStore(execID){

		this.setState({
			content: 'Stores',
			execID: execID
		});

		console.log("Stores with executive ID = " + this.state.execID)
	}


	render() {

		let Show;

		console.log("Showing = " + this.state.content)

		switch (this.state.content){

			case 'Executives':

				Show = <Executives changeTag={this.props.changeTag} displayStore={this.displayStore}/>;
				break;
			case 'Stores':
				console.log("Accessing Stores for " + this.state.execID)
				Show = <Stores changeTag={this.props.changeTag} execID={this.state.execID}/>;
				break;
			default:
				Show = <Executives changeTag={this.props.changeTag}/>;
				break;

		}

		console.log("Showing = " + this.state.content)


		return (
			<div>
				{Show}
			</div>
		);
	}
}
