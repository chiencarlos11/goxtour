import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";
import logo from "../static/goX.png";
import menuLine from "../static/menu-line.png";
import "../stylesheets/navigation.css";

export default class Navigation extends Component {
	render() {
		return (
			<div className="navigation_menu">
				<Nav bsStyle="tabs" activeKey={4}>
					<NavItem eventKey={1} href="/executives">
						<img className="logo" src={logo} width="150" alt="" />
					</NavItem>
					<NavItem className="text" eventKey={2} href="/cities">
						CITIES
					</NavItem>
					<NavItem className="text" eventKey={3} href="/stores">
						STORES
					</NavItem>
					<NavItem className="text" eventKey={4} href="/">
						EXECUTIVES
					</NavItem>
					<NavItem className="text" eventKey={5} href="/info">
						INFO
					</NavItem>
					<NavItem className="text" eventKey={6} href="/contact">
						CONTACT
					</NavItem>
				</Nav>
				<img className="line" src={menuLine} alt="" />
			</div>
		);
	}
}
