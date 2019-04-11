import React, { Component, Fragment } from "react";
import { Button, Card, Row, Col, Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { TableEditor } from "./TableEditor";
import "./index.css";
import uuid from "uuid";
import { withRouter } from "react-router-dom";
import { NotFoundView } from '../NotFoundView';
import FileSaver from 'file-saver';

const EMPTY_PAGE = {
  name: "New Page",
  tables: [],
  isPrivate: false,
};

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      page: null,
      saving: false,
    };

    this.handlePageNameChange = this.handlePageNameChange.bind(this);
    this.handleAddTable = this.handleAddTable.bind(this);
    this.handleDeleteTable = this.handleDeleteTable.bind(this);
    this.handleSaveEntry = this.handleSaveEntry.bind(this);
    this.handleDeleteEntry = this.handleDeleteEntry.bind(this);
    this.handleDiceFormulaChange = this.handleDiceFormulaChange.bind(this);
    this.handleTableNameChange = this.handleTableNameChange.bind(this);
    this.handleHeaderChange = this.handleHeaderChange.bind(this);
    this.handlePageNameChange = this.handlePageNameChange.bind(this);
    this.handleExportPage = this.handleExportPage.bind(this);
    this.handleSavePage = this.handleSavePage.bind(this);
    this.handleDeletePage = this.handleDeletePage.bind(this);
    this.handleIsPrivateChange = this.handleIsPrivateChange.bind(this);
  }

  componentDidMount() {
    if (this.props.pageId) {
      this.unsubscribe = this.props
        .firebase
        .db
        .collection("pages")
        .doc(this.props.pageId)
        .onSnapshot(doc => {
        if (doc.exists) {
          if (doc.data().author_uid === this.props.authUser.uid) {
            this.setState({
              isLoading: false,
              page: doc.data(),
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        } else {
          this.setState({
            isLoading: false,
          })
        }
      });
    } else if (this.props.importPage) {
      this.setState({
        isLoading: false,
        page: this.props.importPage
      });
    } else {
      this.setState({
        isLoading: false,
        page: EMPTY_PAGE
      });
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
              <FormGroup controlId="pageName">
                <FormLabel>Page Name</FormLabel>
                <FormControl
                  type="text"
                  value={this.state.page.name}
                  onChange={this.handlePageNameChange}
                >
                </FormControl>
              </FormGroup>
              <FormGroup controlId="pageName">
                <FormLabel>Visibility: </FormLabel>
                <Form.Check
                  type="checkbox"
                  id="private"
                  label="Private"
                  checked={this.state.page.isPrivate}
                  onChange={this.handleIsPrivateChange}
                />
              </FormGroup>
            </Col>
            <Col xs={12} sm={6}>
              <div className="top-right-button">
                <Row>
                  {this.state.page.author_uid &&
                    <Fragment>
                      <Col>
                        <Button onClick={this.handleExportPage}>Export Page</Button>
                      </Col>
                      <Col>
                        <Button variant="danger" onClick={this.handleDeletePage}>Delete Page</Button>
                      </Col>
                    </Fragment>

                  }
                  <Col>
                    {this.state.saving ? (
                      <Button variant="success">Saving...</Button>
                    ) : (
                        <Button onClick={this.handleSavePage} variant="success">
                          Save Page
                </Button>
                      )}
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="button-row">
            <Col>
              <Button onClick={this.handleAddTable}>Add Table</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              {this.state.page.tables && this.state.page.tables.map(table => {
                return (
                  <Card key={table.id}>
                    <Card.Body>
                      <TableEditor
                        table={table}
                        tables={this.state.page.tables}
                        onDiceFormulaChange={this.handleDiceFormulaChange}
                        onSaveEntry={this.handleSaveEntry}
                        onDeleteEntry={this.handleDeleteEntry}
                        onNameChange={this.handleTableNameChange}
                        onHeaderChange={this.handleHeaderChange}
                        onDeleteTable={this.handleDeleteTable}
                      />
                    </Card.Body>
                  </Card>
                );
              })}
            </Col>
          </Row>
        </Fragment>)
    );
  }

  handlePageNameChange(e) {
    const name = e.target.value;
    this.setState({
      page: {
        ...this.state.page,
        name: name
      }
    });
  }

  handleAddTable() {
    const newTable = {
      id: uuid.v4(),
      name: "New Table",
      diceFormula: "1d20",
      header: "Treasure",
      entries: []
    }
    let updatedTables;
    if (this.state.page.tables) {
      updatedTables = [
        ...this.state.page.tables,
        newTable
      ];
    } else {
      updatedTables = [
        newTable
      ]
    }
    this.setState({
      page: {
        ...this.state.page,
        tables: updatedTables,
      }
    });
  }

  handleDeleteTable(id) {
    const updatedTables = this.state.page.tables.filter(table => {
      return table.id !== id
    });
    this.setState({
      page: {
        ...this.state.page,
        tables: updatedTables
      }
    });
  }

  handleDiceFormulaChange(tableId, diceFormula) {
    const updatedTables = this.state.page.tables.map(table => {
      if (table.id === tableId) {
        table.diceFormula = diceFormula;
      }
      return table;
    });
    this.setState({
      tables: updatedTables
    });
  }

  handleSaveEntry(tableId, entry) {
    const updatedTables = this.state.page.tables.map(table => {
      if (table.id === tableId) {
        if (!table.entries) {
          table.entries = [{ ...entry }];
        } else {
          const entryIndex = table.entries.findIndex(e => e.id === entry.id);
          if (entryIndex === -1) {
            table.entries = [...table.entries, { ...entry }];
          } else {
            const updatedTable = { ...table };
            updatedTable.entries.splice(entryIndex, 1, entry);
          }
        }
      }
      return table;
    });
    this.setState({
      page: {
        ...this.state.page,
        tables: updatedTables
      }
    });
  }

  handleDeleteEntry(tableId, entryId) {
    const updatedTables = this.state.page.tables.map(table => {
      if (table.id === tableId) {
        if (table.entries) {
          const updatedEntries = table.entries.filter(entry => {
            return entry.id !== entryId;
          });
          table.entries = updatedEntries;
        }
      }
      return table;
    });
    this.setState({
      page: {
        ...this.state.page,
        tables: updatedTables
      }
    });
  }

  handleTableNameChange(tableId, name) {
    const updatedTables = this.state.page.tables.map(table => {
      if (table.id === tableId) {
        table.name = name;
      }
      return table;
    });
    this.setState({
      tables: updatedTables
    });
  }

  handleHeaderChange(tableId, header) {
    const updatedTables = this.state.page.tables.map(table => {
      if (table.id === tableId) {
        table.header = header;
      }
      return table;
    });
    this.setState({
      tables: updatedTables
    });
  }

  handleExportPage() {
    const { author_uid, created_at, ...exportData } = this.state.page;
    const dataStr = JSON.stringify(exportData);
    const blob = new Blob([dataStr], { type: "text/plain;charset=utf-8" });
    const defaultFileName = "data.json";
    FileSaver.saveAs(blob, defaultFileName);
  }

  handleSavePage() {
    const pagesRef = this.props.firebase.db.collection("pages");
    let page;
    if (this.props.pageId) {
      page = pagesRef.doc(this.props.pageId)
    } else {
      page = pagesRef.doc();
    }
    page.set({ ...this.state.page, author_uid: this.props.authUser.uid, created_at: this.props.firebase.serverTimestamp() }, error => {
      if (error) {
        console.log(error);
      }
    })
      .then(() => {
        this.props.history.push("/view/" + page.id);
      });
  }

  handleDeletePage() {
    const confirm = window.confirm("Do you really want to delete this page?");
    if (confirm) {
      this.props.firebase.db
        .collection("pages")
        .doc(this.props.pageId)
        .delete()
        .then(() => {
          this.props.history.push("/pages");
        });
    }
  }

  handleIsPrivateChange(e) {
    const isPrivate = e.target.checked;
    this.setState({
      page: {
        ...this.state.page,
       isPrivate
      }
    })
  }
}

export default withRouter(Editor);
