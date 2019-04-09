import React, { Component, Fragment } from "react";
import { Form, Button, Table, Collapse } from "react-bootstrap";
import { EntryModal } from "./EntryModal";

const DEFAULT_EDIT_ENTRY_PROPS = {
    id: '',
    range: [],
    label: '',
    values: [],
}

export class TableEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showEntryModal: false,
            editEntryProps: DEFAULT_EDIT_ENTRY_PROPS,
            open: false,
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleHeaderChange = this.handleHeaderChange.bind(this);
        this.handleSetDiceFormula = this.handleSetDiceFormula.bind(this);
        this.handleEntryModalShow = this.handleEntryModalShow.bind(this);
        this.handleEntryModalClose = this.handleEntryModalClose.bind(this);
        this.handleEntryClick = this.handleEntryClick.bind(this);
        this.handleDeleteTable = this.handleDeleteTable.bind(this);
        this.handleDeleteEntry = this.handleDeleteEntry.bind(this);
    }

    getEntryModalProps() {
        return {
            show: this.state.showEntryModal,
            tables: this.props.tables,
            tableId: this.props.table.id,
            onSaveEntry: this.props.onSaveEntry,
            onEntryModalClose: this.handleEntryModalClose
        }
    };

    render() {
        return (
            <Fragment>
                <div className="d-flex">
                    <div
                        className="table-title d-flex justify-content-between"
                        onClick={this.handleToggle}
                    >
                        <h5>{this.props.table.name}</h5>
                        <i className={"fas fa-chevron-" + (this.state.open ? "up" : "down")} />
                    </div>
                </div>
                <Collapse in={this.state.open}>
                    <div className="table-container">
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Table Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={this.props.table.name}
                                onChange={this.handleNameChange}
                            />
                        </Form.Group>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>
                                        <Form.Group controlId="diceFormula">
                                            <Form.Control
                                                type="text"
                                                value={this.props.table.diceFormula}
                                                onChange={this.handleSetDiceFormula}
                                            />
                                        </Form.Group>
                                    </th>
                                    <th>
                                        <Form.Group controlId="header">
                                            <Form.Control
                                                type="text"
                                                value={this.props.table.header}
                                                onChange={this.handleHeaderChange}
                                            />
                                        </Form.Group>
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.table.entries && this.props.table.entries.map(entry => (
                                    <tr key={entry.id} >
                                        <td className="td-entry" onClick={this.handleEntryClick.bind(this, entry.id)}>{entry.range}</td>
                                        <td className="td-entry" onClick={this.handleEntryClick.bind(this, entry.id)}>{entry.label}</td>
                                        <td className="td-fit">
                                            <Button
                                                variant="danger"
                                                onClick={this.handleDeleteEntry.bind(this, entry.id)}
                                                aria-label="Delete Entry"
                                            >&times;</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <div className="inline-buttons">
                            <Form.Group controlId="addEntry">
                                <Button onClick={this.handleEntryModalShow}>Add Entry</Button>
                            </Form.Group>
                            <Form.Group controlId="deleteTable">
                                <Button variant="danger" onClick={this.handleDeleteTable}>Delete Table</Button>
                            </Form.Group>
                        </div>
                    </Form>
                    </div>
                </Collapse>
                {
                    this.state.showEntryModal &&
                    <EntryModal
                        {...this.getEntryModalProps()}
                        {...this.state.editEntryProps}
                    />
                }
            </Fragment>

        );
    }

    handleToggle() {
        this.setState({
            open: !this.state.open,
        });
    }

    handleNameChange(e) {
        this.props.onNameChange(this.props.table.id, e.target.value);
    }

    handleHeaderChange(e) {
        this.props.onHeaderChange(this.props.table.id, e.target.value);
    }

    handleSetDiceFormula(e) {
        this.props.onSetDiceFormula(this.props.table.id, e.target.value);
    }

    handleEntryModalShow() {
        this.setState({
            showEntryModal: true
        });
    }

    handleEntryModalClose() {
        this.setState({
            showEntryModal: false,
            editEntryProps: DEFAULT_EDIT_ENTRY_PROPS,
        });
    }

    handleEntryClick(entryId) {
        const entry = this.props.table.entries.find(en => en.id === entryId);
        if (entry) {
            this.setState({
                editEntryProps: {
                    id: entryId,
                    range: entry.range,
                    label: entry.label,
                    values: entry.values,
                }
            });
            this.handleEntryModalShow();
        }
    }

    handleDeleteEntry(entryId) {
        const result = window.confirm("Are you sure you want to delete this entry?");
        if (result) {
            this.props.onDeleteEntry(this.props.table.id, entryId);
        }
    }

    handleDeleteTable() {
        const result = window.confirm("Are you sure you want to delete this table?");
        if (result) {
            this.props.onDeleteTable(this.props.table.id);
        }
    }
}
