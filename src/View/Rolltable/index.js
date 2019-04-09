import React, { Component, Fragment } from "react";
import { Button, Table, Collapse } from "react-bootstrap";

export class RollTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    }

    this.onClick = this.onClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  onClick() {
    this.props.handleRoll(this.props.table.id);
  }

  render() {
    return (
      <Fragment>
        <div className="d-flex">
          <Button className="roll-button" onClick={this.onClick}>Roll</Button>
          <div
            className="table-title d-flex justify-content-between"
            onClick={this.handleToggle}
          >
            <h5>{this.props.table.name}</h5>
            <i className={"fas fa-chevron-" + (this.state.open ? "up" : "down")}/>
          </div>
        </div>
        <Collapse in={this.state.open}>
          <div className="table-container">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th><div className="rolltable-dice-header"><span className="rolltable-dice-formula">{this.props.table.diceFormula}</span></div></th>
                  <th className="rolltable-header">{this.props.table.header}</th>
                </tr>
              </thead>
              <tbody>
                {this.props.table.entries && this.props.table.entries.map(entry => (
                  <tr key={entry.id}>
                    <td>{entry.range}</td>
                    <td>{entry.label}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Collapse>
      </Fragment>
    );
  }

  handleToggle() {
    this.setState({
      open: !this.state.open,
    });
  }
}
