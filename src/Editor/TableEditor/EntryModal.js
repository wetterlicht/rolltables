import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { EntryEditor } from "./EntryEditor";
import uuid from "uuid";

export class EntryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      range: props.range,
      values: props.values,
      label: props.label
    };

    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleLabelChange = this.handleLabelChange.bind(this);
    this.handleAddValue = this.handleAddValue.bind(this);
    this.handleDeleteValue = this.handleDeleteValue.bind(this);
    this.handleSaveEntry = this.handleSaveEntry.bind(this);
    this.handleValueTypeChange = this.handleValueTypeChange.bind(this);
    this.handleValueTextChange = this.handleValueTextChange.bind(this);
    this.handleValueTargetTableChange = this.handleValueTargetTableChange.bind(this);
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onEntryModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.id ? "Edit Entry" : "Add Entry"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EntryEditor
            range={this.state.range}
            label={this.state.label}
            values={this.state.values}
            tables={this.props.tables}
            onAddValue={this.handleAddValue}
            onDeleteValue={this.handleDeleteValue}
            onRangeChange={this.handleRangeChange}
            onLabelChange={this.handleLabelChange}
            onTypeChange={this.handleValueTypeChange}
            onTextChange={this.handleValueTextChange}
            onTargetTableChange={this.handleValueTargetTableChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onEntryModalClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={this.handleSaveEntry}>
            {this.props.id ? "Save Entry" : "Add Entry"}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  handleRangeChange(e) {
    //todo validate
    this.setState({
      range: e.target.value
    });
  }

  handleLabelChange(e) {
    this.setState({
      label: e.target.value
    });
  }

  handleAddValue() {
    this.setState({
      values: [
        ...this.state.values,
        {
          id: uuid.v4(),
          type: "text",
          text: "",
          table: ""
        }
      ]
    });
  }

  handleDeleteValue(valueId) {
    const confirm = window.confirm("Are you sure you want to delete this value?");
    if (confirm) {
      const updatedValues = this.state.values.filter(value => {
        return value.id !== valueId;
      })
      this.setState({
        values: updatedValues
      });
    }
  }

  handleSaveEntry() {
    const entry = {
      id: this.props.id ? this.props.id : uuid.v4(),
      range: this.state.range,
      label: this.state.label,
      values: this.state.values
    };
    this.props.onSaveEntry(this.props.tableId, entry);
    this.props.onEntryModalClose();
  }

  handleValueTypeChange(valueId, typeValue) {
    const updatedValues = this.state.values.map(value => {
      if (value.id === valueId) {
        return { ...value, type: typeValue };
      }
      return value;
    });
    this.setState({
      values: updatedValues
    });
  }

  handleValueTextChange(valueId, textValue) {
    const updatedValues = this.state.values.map(value => {
      if (value.id === valueId) {
        return { ...value, text: textValue };
      }
      return value;
    });
    this.setState({
      values: updatedValues
    });
  }

  handleValueTargetTableChange(valueId, targetTableValue) {
    const updatedValues = this.state.values.map(value => {
      if (value.id === valueId) {
        return { ...value, targetTable: targetTableValue };
      }
      return value;
    });
    this.setState({
      values: updatedValues
    });
  }
}
