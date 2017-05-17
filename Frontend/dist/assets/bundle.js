'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _ClassComponent = require('./componets/ClassComponent');

var _ClassComponent2 = _interopRequireDefault(_ClassComponent);

var _Stateless = require('./componets/Stateless');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.React = _react2.default;

(0, _reactDom.render)(_react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_ClassComponent2.default, null),
    _react2.default.createElement(_Stateless.Stateless, { message: 'This Can hold data not state' })
), document.getElementById('reactor-container'));
