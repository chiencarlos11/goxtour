import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import "../stylesheets/background.css";

export default class MainArea extends Component {
	render() {
		return (
			<Grid className="mainpanel">
				<Row >
					<Col xs={6} md={4} className="leftpanel" >
						<MainLeft />
					</Col>
					<Col xs={12} md={8} className="rightpanel" >
						<MainRight />
					</Col>
				</Row>
			</Grid>
		);
	}
}
