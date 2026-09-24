import './App.css'

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {

    state = {
        progress: 0
    }

    setProgress = (progress) => {
        this.setState({
            progress: progress
        })
    }
    render() {
        return (
            <div>
                <Router>

                    <LoadingBar
                        color="#f11946"
                        height={1.75}
                        progress={this.state.progress}
                    />

                    <NavBar />

                    <Routes>
                        <Route path="/" element={<News setProgress={this.setProgress} pageSize={20} country="us" />} />
                        <Route path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={20} country="us" category="business" />} />
                        <Route path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={20} country="us" category="entertainment" />} />
                        <Route path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={20} country="us" category="health" />} />
                        <Route path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={20} country="us" category="science" />} />
                        <Route path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={20} country="us" category="sports" />} />
                        <Route path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={20} country="us" category="technology" />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}