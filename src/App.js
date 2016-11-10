import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link, browserHistory } from 'react-router'

class App extends Component {

  render() {
    return (
        <div>
            <h1>App</h1>
            {/* change the <a>s to <Link>s */}
            <ul>
                <li><Link to="/about">About</Link></li>
            </ul>

            {/*
             next we replace `<Child>` with `this.props.children`
             the router will figure out the children for us
             */}
            {this.props.children}
        </div>
    );
  }
}

export default App;
