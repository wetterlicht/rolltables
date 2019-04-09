import React, { Component, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ValueEditor } from './ValueEditor';

export class EntryEditor extends Component {

    render() {
        return (
            <Form>
                <Form.Group controlId="range">
                    <Form.Label>Range</Form.Label>
                    <Form.Control type="text" value={this.props.range} onChange={this.props.onRangeChange} />
                </Form.Group>
                <Form.Group controlId="label">
                    <Form.Label>Label</Form.Label>
                    <Form.Control type="text" value={this.props.label} onChange={this.props.onLabelChange} />
                </Form.Group>
                <hr />
                {this.props.values.map(value =>
                    <Fragment key={value.id}>
                        <fieldset >
                                <legend className="d-flex justify-content-between">
                                    Value
                                    <Button
                                    className="delete-value"
                                    variant="danger"
                                    onClick={this.props.onDeleteValue.bind(this, value.id)}
                                    aria-label="Delete Value"
                                >&times;
                            </Button>
                            </legend>
                            <ValueEditor
                                value={value}
                                tables={this.props.tables}
                                onTypeChange={this.props.onTypeChange}
                                onTextChange={this.props.onTextChange}
                                onTargetTableChange={this.props.onTargetTableChange}
                            />
                        </fieldset>
                        <hr />
                    </Fragment>
                )}
                <Form.Group controlId="addEntry">
                    <Button onClick={this.props.onAddValue}>Add Value</Button>
                </Form.Group>
            </Form>
        );
    }
}