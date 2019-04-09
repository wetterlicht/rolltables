import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css'
import './index.css';

export default class Navigation extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink to="/" className="navbar-brand"><i className="fas fa-dice-d20"></i> Rolltables</NavLink>
                <ul className="navbar-nav mr-auto">
                    {this.props.authUser &&
                        <li className="nav-item">
                            <NavLink to="/pages" className="nav-link">Your Pages</NavLink>
                        </li>
                    }
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        {this.props.authUser ?
                            <span role="button" className="nav-logout nav-link" onClick={this.props.firebase.doSignOut}>Logout</span>
                            :
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                        }
                    </li>
                </ul>
            </nav>
        );
    }
}