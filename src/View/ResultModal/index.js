import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Result } from "../Result";

export class ResultModal extends Component {

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Result result={this.props.result}/>
        </Modal.Body>
      </Modal>
    );
  }
}
