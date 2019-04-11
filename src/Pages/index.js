import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import "./index.css";

class Pages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pages: null,
        }

        this.handleCreatePage = this.handleCreatePage.bind(this);
        this.handleImportPage = this.handleImportPage.bind(this);
    }

    render() {
        return (
            <div>
                {
                    this.state.pages && (
                        <Fragment>
                            <Row className="center">
                                <Col sm={{ span: 6, offset: 3 }} md={{ span: 4, offset: 4 }}>
                                    <h1>Your Pages</h1>
                                    <div className="list-group">
                                        {this.state.pages.map(page => {
                                            return (
                                                <Link
                                                    key={page.id}
                                                    to={"/view/" + page.id}
                                                    className="list-group-item list-group-item-action"
                                                >
                                                    {page.name}
                                                </Link>
                                            );
                                        })
                                        }
                                    </div>
                                </Col>
                            </Row>
                            <Row className="center pages-button-row">
                                <Col sm={{ span: 6, offset: 3 }} md={{ span: 4, offset: 4 }}>
                                    <Button onClick={this.handleCreatePage}>Create Page</Button>
                                </Col>
                            </Row>
                            <Row className="center pages-button-row">
                                <Col sm={{ span: 6, offset: 3 }} md={{ span: 4, offset: 4 }}>
                                    <div>
                                        <label htmlFor="customFile">
                                            <div className="btn btn-primary">
                                                Import Page
                                            </div>
                                        </label>
                                        <input type="file" accept="application/json" hidden id="customFile" onChange={this.handleImportPage} />
                                    </div>
                                </Col>
                            </Row>
                        </Fragment>
                    )
                }
            </div>
        )
    }

    componentDidMount() {
        if (this.props.authUser) {
            this.unsubscribe = this.props.firebase.db
                .collection("pages")
                .where("author_uid", "==", this.props.authUser.uid)
                .onSnapshot(snapshot => {
                    const pages = [];
                    snapshot.forEach(data => {
                        pages.push({ ...data.data(), id: data.id });
                    });
                    pages.sort((a, b) => a.created_at < b.created_at ? 1 : -1);
                    this.setState({
                        pages
                    });
                });
        }
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleCreatePage() {
        this.props.history.push("/create");
    }

    handleImportPage(e) {
        const fileList = e.target.files;
        if (fileList.length > 0) {
            const file = fileList[0];
            var reader = new FileReader();
            reader.readAsText(file);
            reader.onload = (e) => {
                const jsonString = e.target.result;
                const page = JSON.parse(jsonString);
                this.props.onImportPage(page);
                this.props.history.push("/import");
            }
        }
    }
}

export default withRouter(Pages);