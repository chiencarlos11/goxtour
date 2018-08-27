import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class ImageModal extends Component {
  render() {


    let photo = <img alt="" />;

    if (this.props.photo === undefined || this.props.photo === null) {

      photo = <img alt="" />;

    } else {

      photo = (
        <img
          src={this.props.photo.images.standard_resolution.url}
          alt={this.props.photo.id}
        />
      );
    }

    return (
      <div>
        <Modal bsSize="large" show={this.props.showModal} onHide={this.props.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {photo}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
