import React, { Component, Fragment } from 'react';
import { Form } from 'react-bootstrap';

export const VALUE_TYPE_TEXT = "text";
export const VALUE_TYPE_ROLL = "roll";

export class ValueEditor extends Component {
    constructor(props){
        super(props);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTargetTableChange = this.handleTargetTableChange.bind(this);
    }

    render() {
        return (
            <Fragment>
                <Form.Group controlId="formGroupType">
                    <Form.Label>Type: </Form.Label>
                    <Form.Control as="select" value={this.props.value.type} onChange={this.handleTypeChange} >
                        <option value={VALUE_TYPE_TEXT}>Text</option>
                        <option value={VALUE_TYPE_ROLL}>Roll</option>
                    </Form.Control>
                </Form.Group>
              {this.props.value.type === "text" &&
                    <Form.Group controlId="formGroupText">
                        <Form.Label>Text: </Form.Label>
                        <Form.Control as="textarea" rows="3" value={this.props.value.text} onChange={this.handleTextChange} />
                    </Form.Group>
                }
                {this.props.value.type === "roll" &&
                    <Form.Group controlId="formGroupRoll">
                        <Form.Label>Table: </Form.Label>
                        <Form.Control as="select" value={this.props.value.targetTable} onChange={this.handleTargetTableChange}>
                            {this.props.tables.map(table =>
                                <option key={table.id} value={table.id} >{table.name}</option>
                            )}
                        </Form.Control>
                    </Form.Group>
                }
            </Fragment>
        );
    }

    handleTypeChange(e) {
        this.props.onTypeChange(this.props.value.id, e.target.value);
    }

    handleTextChange(e) {
        this.props.onTextChange(this.props.value.id, e.target.value);
    }

    handleTargetTableChange(e) {
        this.props.onTargetTableChange(this.props.value.id, e.target.value);
    }
}