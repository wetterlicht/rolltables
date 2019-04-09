import React, { Component, Fragment } from "react";
import { Button, Card, Row, Col, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { TableEditor } from "./TableEditor";
import "./index.css";
import uuid from "uuid";
import { withRouter } from "react-router-dom";
import { NotFoundView } from '../NotFoundView';
import FileSaver from 'file-saver';

const EMPTY_PAGE = {
  name: "New Page",
  tables: [],
};

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      page: null,
      saving: false,
      pageRef: null,
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
          if (snapshot.val().author_uid === this.props.authUser.uid) {
            this.setState({
              isLoading: false,
              page: snapshot.val(),
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
              <FormGroup controlId="pageName">
                <FormLabel>Page Name</FormLabel>
                <FormControl
                  type="text"
                  value={this.state.page.name}
                  onChange={this.handlePageNameChange}
                >
                </FormControl>
              </FormGroup>

            </Col>
            <Col>
              <div className="top-right-button">
                {this.state.page.author_uid &&
                  <Fragment>
                    <Button onClick={this.handleExportPage}>Export Page</Button>
                    <Button variant="danger" onClick={this.handleDeletePage}>Delete Page</Button>
                  </Fragment>

                }
                {this.state.saving ? (
                  <Button variant="success">Saving...</Button>
                ) : (
                    <Button onClick={this.handleSavePage} variant="success">
                      Save Page
                </Button>
                  )}
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
                        onSetDiceFormula={this.handleSetDiceFormula}
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
    const pagesRef = this.props.firebase.db.ref("pages");
    let page;
    if (this.props.pageId) {
      page = pagesRef.child(this.props.pageId)
    } else {
      page = pagesRef.push();
    }
    page.set({ ...this.state.page, author_uid: this.props.authUser.uid, created_at: this.props.firebase.serverTimestamp }, error => {
      if (error) {
        console.log(error);
      }
    })
      .then(() => {
        this.props.history.push("/view/" + page.key);
      });
  }

  handleDeletePage() {
    const confirm = window.confirm("Do you really want to delete this page?");
    if (confirm) {
      const pagesRef = this.props.firebase.db.ref("pages");
      let page;
      page = pagesRef.child(this.props.pageId)
      page.remove()
        .then(() => {
          this.props.history.push("/pages");
        });
    }
  }
}

export default withRouter(Editor);
