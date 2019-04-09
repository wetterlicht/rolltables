import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';

export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pages: null,
            newPagesRef: null,
        }
    }

    componentDidMount() {
            const newPagesRef = this.props.firebase.db.ref("pages").orderByChild("creation_date").limitToLast(5);
            this.setState({
                newPagesRef
            })
            newPagesRef.on("value", snapshot => {
                const pages = [];
                snapshot.forEach(data => {
                    pages.push({ ...data.val(), id: data.key });
                });
                pages.reverse();
                this.setState({
                    pages
                });
            });
    }

    componentWillUnmount() {
        if (this.state.newPagesRef) {
            this.state.newPagesRef.off("value");
        }
    }

    render() {
        return (
            <div className="center">
                <h1>Welcome!</h1>
                {!this.props.authUser ?
                    <p>
                        Check out the latest tables below or <Link to="/login">login</Link> to start creating your own!
                    </p>
                    :
                    <p>
                        Check out the latest tables below or start <Link to="/pages">creating your own!</Link>
                    </p>
                }
                {this.state.pages && 
                    <Row className="center">
                    <Col sm={{ span: 6, offset: 3 }} md={{ span: 4, offset: 4 }}>
                        <h1>Latest Pages</h1>
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
                }
            </div>
        );
    }
}

export default Home;