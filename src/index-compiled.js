'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

require('./index.css');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'main' },
                _react2.default.createElement(
                    'h1',
                    null,
                    'clay.limo'
                ),
                _react2.default.createElement('ul', { className: 'side-nav' }),
                _react2.default.createElement(
                    'div',
                    { className: 'content' },
                    this.props.children
                )
            );
        }
    }]);

    return App;
}(_react.Component);

var Home = function (_Component2) {
    _inherits(Home, _Component2);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'I\'m Clay and have been developing applications for more than 10 years.'
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: 'http://twitter.com/claylimo' },
                        _react2.default.createElement('img', { src: '/assets/image/twitter.png', width: '20' }),
                        ' Twitter'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: 'http://stack.im/claylimo' },
                        _react2.default.createElement('img', { src: '/assets/image/stackoverflow.png', width: '20' }),
                        ' Stack Overflow'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: 'http://github.com/fc' },
                        _react2.default.createElement('img', { src: '/assets/image/github.png', width: '20' }),
                        ' GitHub'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: 'mailto:me@clay.limo' },
                        _react2.default.createElement('img', { src: '/assets/image/envelope.png', width: '20' }),
                        ' me@clay.limo'
                    )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('img', { src: '/assets/image/limo.png', alt: 'Coding with Style' })
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

var About = function (_Component3) {
    _inherits(About, _Component3);

    function About() {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
    }

    _createClass(About, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: 'http://twitter.com/claylimo' },
                        _react2.default.createElement('img', { src: '/assets/image/twitter.png', width: '20' }),
                        ' Twitter'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: 'http://stack.im/claylimo' },
                        _react2.default.createElement('img', { src: '/assets/image/stackoverflow.png', width: '20' }),
                        ' Stack Overflow'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: 'http://github.com/fc' },
                        _react2.default.createElement('img', { src: '/assets/image/github.png', width: '20' }),
                        ' GitHub'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: 'mailto:me@clay.limo' },
                        _react2.default.createElement('img', { src: '/assets/image/envelope.png', width: '20' }),
                        ' me@clay.limo'
                    )
                )
            );
        }
    }]);

    return About;
}(_react.Component);

var Bugs = function (_Component4) {
    _inherits(Bugs, _Component4);

    function Bugs() {
        _classCallCheck(this, Bugs);

        return _possibleConstructorReturn(this, (Bugs.__proto__ || Object.getPrototypeOf(Bugs)).apply(this, arguments));
    }

    _createClass(Bugs, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'Bugs in the Wild'
            );
        }
    }]);

    return Bugs;
}(_react.Component);

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.


(0, _reactDom.render)(_react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(
        _reactRouter.Route,
        { path: '/', component: App },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: Home }),
        _react2.default.createElement(_reactRouter.Route, { path: 'about', component: About }),
        _react2.default.createElement(_reactRouter.Route, { path: 'bugs', component: Bugs })
    )
), document.getElementById('root'));

//# sourceMappingURL=index-compiled.js.map