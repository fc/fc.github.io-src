import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

class App extends Component {

    render() {
        return (
            <div id="main">
                <h1>clay.limo</h1>
                {/* change the <a>s to <Link>s */}
                <ul className="side-nav">
                    {/*
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/bugs">Bugs in the Wild</Link></li>
                    */}
                </ul>
                <div className="content">
                        {/*
                         next we replace `<Child>` with `this.props.children`
                         the router will figure out the children for us
                         */}
                        {this.props.children}
                </div>

            </div>
        );
    }
}

class Home extends Component {
    render() {
        return (
            <div>
                <p>I'm Clay and have been developing applications for more than 10 years.</p>
                <div><a href="http://twitter.com/claylimo"><img src="/assets/image/twitter.png" width="20"/> Twitter</a></div>
                <div><a href="http://stack.im/claylimo"><img src="/assets/image/stackoverflow.png" width="20"/> Stack Overflow</a></div>
                <div><a href="http://github.com/fc"><img src="/assets/image/github.png" width="20"/> GitHub</a></div>
                <div><a href="mailto:me@clay.limo"><img src="/assets/image/envelope.png" width="20" /> me@clay.limo</a></div>
                <br />
                <div><img src="/assets/image/limo.png" alt="Coding with Style"/></div>
            </div>
        );
    }
}

class About extends Component {
    render() {
        return (
            <div>
                <div><a href="http://twitter.com/claylimo"><img src="/assets/image/twitter.png" width="20"/> Twitter</a></div>
                <div><a href="http://stack.im/claylimo"><img src="/assets/image/stackoverflow.png" width="20"/> Stack Overflow</a></div>
                <div><a href="http://github.com/fc"><img src="/assets/image/github.png" width="20"/> GitHub</a></div>
                <div><a href="mailto:me@clay.limo"><img src="/assets/image/envelope.png" width="20" /> me@clay.limo</a></div>
            </div>
        );
    }
}

class Bugs extends Component {
    render() {
        return (
            <div>
                Bugs in the Wild
            </div>
        );
    }
}

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="about" component={About} />
            <Route path="bugs" component={Bugs} />
        </Route>
    </Router>
), document.getElementById('root'))