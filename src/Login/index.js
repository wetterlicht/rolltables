import {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './index.css';

class Login extends Component {
    render() {
        return (
            this.props.firebase.LoginScreen()
        );
    }
}

export default withRouter(Login);