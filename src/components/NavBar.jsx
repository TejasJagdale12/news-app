import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import './NavBar.css';

export class NavBar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark news-navbar fixed-top" style={{ height: "55px" }}>
                    <div className="container-fluid">
                        <span className="navbar-brand news-logo">📰 NewsPulse</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 news-menu">
                                <li className="nav-item"><NavLink className="nav-link news-link" aria-current="page" to="/">Home</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link news-link" to="/business">Business</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link news-link" to="/entertainment">Entertainment</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link news-link" to="/health">Health</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link news-link" to="/science">Science</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link news-link" to="/sports">Sports</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link news-link" to="/technology">Technology</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
