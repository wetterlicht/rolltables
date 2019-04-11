import React, { Component, Fragment } from "react";
import { RollTable } from "./Rolltable";
import { rollTable } from "../Util/DiceUtil";
import { Button, Row, Col, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { NotFoundView } from '../NotFoundView';
import {ResultModal} from './ResultModal';
import "./index.css"

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      page: null,
      result: null,
      showResultModal: false,
    };

    this.handleRoll = this.handleRoll.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleHideResultModal = this.handleHideResultModal.bind(this);
  }

  componentDidMount() {
    if (this.props.pageId) {
      this.unsubscribe = this.props.firebase.db
      .collection("pages")
      .doc(this.props.pageId)
      .onSnapshot(doc => {
        if (doc.exists) {
          this.setState({
            isLoading: false,
            page: doc.data(),
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
    this.unsubscribe();
  }

  render() {
    return (
      !this.state.isLoading &&
      (!this.state.page ?
        <NotFoundView />
        :
        <Fragment>
          <Row>
            <Col xs={12} sm={6}>
              <h1>{this.state.page.name}</h1>
            </Col>
            {this.props.authUser && this.props.authUser.uid === this.state.page.author_uid && <Col xs={12} sm={6}>
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
          {
                    <ResultModal
                        result={this.state.result}
                        show={this.state.showResultModal}
                        onHide={this.handleHideResultModal}
                    />
          }
        </Fragment>)
    );
  }

  handleRoll(tableId) {
    const result = rollTable(tableId, this.state.page);
    this.setState({
      result: result,
      showResultModal: true,
    });
  }

  handleEdit() {
    this.props.history.push("/edit/" + this.props.pageId);
  }

  handleHideResultModal(){
    this.setState({
      showResultModal: false,
    })
  }
}

export default withRouter(View);
