import React, { Component, Fragment } from "react";
import { RollTable } from "./Rolltable";
import { Result } from "./Result";
import { rollTable } from "../Util/DiceUtil";
import { Button, Row, Col, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { NotFoundView } from '../NotFoundView';
import "./index.css"

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      page: null,
      result: null,
      pageRef: null,
    };

    this.handleRoll = this.handleRoll.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    if (this.props.pageId) {
      const pageRef = this.props
        .firebase
        .db
        .ref("pages")
        .child(this.props.pageId);
      this.setState({
        pageRef
      });
      pageRef.on("value", snapshot => {
        if (snapshot.exists()) {
          this.setState({
            isLoading: false,
            page: snapshot.val(),
          });
        } else {
          this.setState({
            isLoading: false,
          })
        }
      });
    } else {
      this.setState({
        isLoading: false
      })
    }
  }

  componentWillUnmount() {
    if (this.state.pageRef) {
      this.state.pageRef.off("value");
    }
  }

  render() {
    return (
      !this.state.isLoading &&
      (!this.state.page ?
        <NotFoundView />
        :
        <Fragment>
          <Row>
            <Col>
              <h1>{this.state.page.name}</h1>
            </Col>
            {this.props.authUser && this.props.authUser.uid === this.state.page.author_uid && <Col>
              <div className="top-right-button">
                <Button onClick={this.handleEdit}>Edit Page</Button>
              </div>
            </Col>
            }
          </Row>
          <Row className="view-tables">
            <Col>
              {this.state.page.tables && this.state.page.tables.map(table => {
                return (
                  <Card key={table.id}>
                    <Card.Body>
                      <RollTable
                        handleRoll={this.handleRoll}
                        table={table}
                      />
                    </Card.Body>
                  </Card>

                );
              })}
            </Col>
          </Row>
          {this.state.result && <Row>
            <Col>
              <Result result={this.state.result} />
            </Col>
          </Row>}
        </Fragment>)
    );
  }

  handleRoll(tableId) {
    const result = rollTable(tableId, this.state.page);
    this.setState({
      result: result
    });
  }

  handleEdit() {
    this.props.history.push("/edit/" + this.props.pageId);
  }
}

export default withRouter(View);
