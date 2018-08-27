import React, { Component } from "react";
import { Media } from "react-bootstrap";
import "../stylesheets/store.css";
import image from "../static/plane.png";

class Store extends Component {
  render() {
    return (
      <div>
        <Media>
          <Media.Left>
            <img src={image} width="100" alt={this.props.name} />
          </Media.Left>
          <Media.Body>
            <div className="name">{this.props.name}</div>
            <div className="title">{this.props.state}</div>
          </Media.Body>
        </Media>
      </div>
    );
  }
}

export default Store;
