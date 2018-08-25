import React, { Component } from "react";
import Executive from "./Executive.js";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default class Executives extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem href="#link1">
          <Executive name="DAVID INGRAM" title="CHIEF EXECUTIVE OFFICER" />
        </ListGroupItem>
        <ListGroupItem href="#link1">
          <Executive name="JASON MULLIMS" title="PRESIDENT & COO" />
        </ListGroupItem>
        <ListGroupItem href="#link1">
          <Executive name="STEVEN POOLE" title="SVP, EFS OPERATIONS" />
        </ListGroupItem>
        <ListGroupItem href="#link1">
          <Executive name="JASON APPEL" title="SVP & CRO" />
        </ListGroupItem>
        <ListGroupItem href="#link1">
          <Executive
            name="SHANE PENNELL"
            title="SVP, OPERATIONS & MERCHANDISING"
          />
        </ListGroupItem>
      </ListGroup>
    );
  }
}
