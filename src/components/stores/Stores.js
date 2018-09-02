import React, { Component } from "react";
import Store from "./Store";
import Executive from "../executives/Executive";
import logo from "../../static/goXtour_logo.png";


const storesData = require("../../data/stores.json");
const avatarsData = require("../../data/avatars.json");

export default class Stores extends Component {
  handleClick(id) {
    this.props.changeTagStore(id);
  }

  displayExec(){
    this.props.displayStore(null)
    this.props.changeTagStore(null);
  }

  render() {

    //Returning all stores that matches execID
    let Exec_stores = avatarsData.avatars[this.props.execID].stores;

    //filtering stores that only belongs to the Exec
    let filtered_stores = storesData.stores.filter(function(store) {
      return Exec_stores.includes(store.id);
    });

    let Stores = filtered_stores.map(store => (
      <li
        key={store.name}
        onClick={this.handleClick.bind(this, store.id)}
      >
        <Store name={store.name} state={store.state} />
      </li>
    ));

    let currExec = (
      <Executive
        name={avatarsData.avatars[this.props.execID].name}
        title={avatarsData.avatars[this.props.execID].title}
      />
    );

    return (
      <ul className="menu_box">
        <img className="logo2" src={logo} width="150" alt="" onClick={this.displayExec.bind(this)} />
        {currExec}
        {Stores}
      </ul>
    );
  }
}
