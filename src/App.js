import React, { Component } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Navigation from './Navigation';
import Home from './Home';
import Editor from "./Editor";
import View from "./View";
import Login from './Login';
import Pages from './Pages';
import { NotFoundView } from './NotFoundView';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userSet: false,
      authUser: null,
      importPage: null,
    };

    this.Home = this.Home.bind(this);
    this.Login = this.Login.bind(this);
    this.Pages = this.Pages.bind(this);
    this.Create = this.Create.bind(this);
    this.Edit = this.Edit.bind(this);
    this.View = this.View.bind(this);
    this.Import = this.Import.bind(this);
    this.handleImportPage = this.handleImportPage.bind(this);
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser, userSet: true })
        : this.setState({ authUser: null, userSet: true });
    });
  }

  render() {
    return this.state.userSet && (
      <Router basename={process.env.PUBLIC_URL}>
        <Navigation firebase={this.props.firebase} authUser={this.state.authUser} />
        <Container fluid>
          <Row>
            <Col>
            </Col>
          </Row>
          <Row>
            <Col>
              <Switch>
                <Route exact path="/" component={this.Home} />
                <Route exact path="/login" component={this.Login} />
                <this.PrivateRoute path="/pages" component={this.Pages} />
                <this.PrivateRoute path="/create" component={this.Create} />
                <this.PrivateRoute path="/import" component={this.Import} />
                <this.PrivateRoute path="/edit/:pageId" component={this.Edit} />
                <Route path="/view/:pageId" component={this.View} />
                <Route component={NotFoundView} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }

  Home() {
    return (
      <Home firebase={this.props.firebase} authUser={this.state.authUser} />
    )
  }

  Login() {
    return (
      <Login firebase={this.props.firebase} />
    )
  }

  Pages() {
    return (
      <Pages firebase={this.props.firebase} authUser={this.state.authUser} onImportPage={this.handleImportPage}/>
    );
  }

  Create() {
    return (
      <Editor 
        firebase={this.props.firebase}
        authUser={this.state.authUser}
      />
    );
  }

  Import() {
    if(this.state.importPage) {
      return (
        <Editor 
          firebase={this.props.firebase}
          authUser={this.state.authUser}
          importPage={this.state.importPage}
        />
      );
    } else {
      return <Redirect to="/" />
    }
  }

  Edit({ match }) {
    return (
      <Editor
        firebase={this.props.firebase}
        authUser={this.state.authUser}
        pageId={match.params.pageId}
      />
    );
  }

  View({ match }) {
    return (
      <View
        firebase={this.props.firebase}
        authUser={this.state.authUser}
        pageId={match.params.pageId}
      />
    );
  }

  PrivateRoute = ({ component: Component, ...rest }) => (
    this.state.userSet &&
    <Route {...rest} render={(props) => (
      this.state.authUser
        ? <Component {...props} />
        : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
    )} />
  );

  handleImportPage(page){
    this.setState({
      importPage: page
    });
  }
}
