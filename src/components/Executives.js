import React, { Component } from "react";
import Executive from "./Executive.js";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import "../stylesheets/executive.css";
import logo from "../static/goXtour_logo.png";

export default class Executives extends Component {


  handleClick(id){
    console.log("Executive ID = " + id)
  }


  render() {
    return (
      <ListGroup bsClass="list">
        <img className="logo2" src={logo} width="150" alt="" />
        <ListGroupItem value ="1" onClick={this.handleClick.bind(this,1)}>
          <Executive name="DAVID INGRAM" title="CHIEF EXECUTIVE OFFICER" />
        </ListGroupItem>
        <ListGroupItem value ="2" onClick={this.handleClick.bind(this,2)}>
          <Executive name="JASON MULLIMS" title="PRESIDENT & COO" />
        </ListGroupItem>
        <ListGroupItem value ="3" onClick={this.handleClick.bind(this,3)}>
          <Executive name="STEVEN POOLE" title="SVP, EFS OPERATIONS" />
        </ListGroupItem>
        <ListGroupItem value ="4" onClick={this.handleClick.bind(this,4)}>
          <Executive value ="5" name="JASON APPEL" title="SVP & CRO" />
        </ListGroupItem>
        <ListGroupItem onClick={this.handleClick.bind(this,5)}>
          <Executive
            name="SHANE PENNELL"
            title="SVP, OPERATIONS & MERCHANDISING"
          />
        </ListGroupItem>
      </ListGroup>
    );
  }
}
