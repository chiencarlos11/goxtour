import React, { Component } from "react";
import Store from "./Store";
import Executive from "./Executive";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import "../stylesheets/executive.css";
import logo from "../static/goXtour_logo.png";
const storesData = require("../data/stores.json");
const avatarsData = require("../data/avatars.json");

export default class Stores extends Component {
  handleClick(id) {
    this.props.changeTagStore(id);
  }

  render() {
    let Stores = storesData.stores.map(store => (
      <ListGroupItem
        key={store.name}
        onClick={this.handleClick.bind(this, store.id)}
      >
        <Store name={store.name} state={store.state} />
      </ListGroupItem>
    ));

    let currExec = (
      <Executive
        name={avatarsData.avatars[this.props.execID].name}
        title={avatarsData.avatars[this.props.execID].title}
      />
    );

    return (
      <ListGroup bsClass="store-list">
        <img className="logo2" src={logo} width="150" alt="" />
        {currExec}
        {Stores}
      </ListGroup>
    );
  }
}
