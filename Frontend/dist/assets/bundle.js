'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _ClassComponent = require('./componets/ClassComponent');

var _ClassComponent2 = _interopRequireDefault(_ClassComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.React = _react2.default;

(0, _reactDom.render)(_react2.default.createElement(
    'div',
    { className: 'container' },
    _react2.default.createElement(_ClassComponent2.default, null)
), document.getElementById('reactor-container'));
