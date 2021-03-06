'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _style = require('../style');

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};

var Badge = function (_React$Component) {
    (0, _inherits3['default'])(Badge, _React$Component);

    function Badge() {
        (0, _classCallCheck3['default'])(this, Badge);
        return (0, _possibleConstructorReturn3['default'])(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Badge, [{
        key: 'render',
        value: function render() {
            // tslint:disable:prefer-const
            var _a = this.props,
                styles = _a.styles,
                style = _a.style,
                children = _a.children,
                text = _a.text,
                size = _a.size,
                overflowCount = _a.overflowCount,
                dot = _a.dot,
                corner = _a.corner,
                restProps = __rest(_a, ["styles", "style", "children", "text", "size", "overflowCount", "dot", "corner"]);
            return _react2['default'].createElement(
                _style.WithTheme,
                { themeStyles: _index2['default'], styles: this.props.styles },
                function (s) {
                    text = typeof text === 'number' && text > overflowCount ? overflowCount + '+' : text;
                    // dot mode don't need text
                    if (dot) {
                        text = '';
                    }
                    // fake styles
                    var fakeStyles = s;
                    var badgeCls = corner ? 'textCorner' : 'textDom';
                    var contentDom = !dot ? _react2['default'].createElement(
                        _reactNative.View,
                        (0, _extends3['default'])({}, restProps, { style: [s[badgeCls], fakeStyles['' + badgeCls + size]] }),
                        _react2['default'].createElement(
                            _reactNative.Text,
                            { style: [s.text] },
                            text
                        )
                    ) : _react2['default'].createElement(_reactNative.View, (0, _extends3['default'])({}, restProps, { style: [s.dot, fakeStyles['dotSize' + size]] }));
                    return _react2['default'].createElement(
                        _reactNative.View,
                        { style: [s.wrap, style] },
                        _react2['default'].createElement(
                            _reactNative.View,
                            { style: [fakeStyles[badgeCls + 'Wrap']] },
                            children,
                            text || dot ? contentDom : null
                        )
                    );
                }
            );
        }
    }]);
    return Badge;
}(_react2['default'].Component);

exports['default'] = Badge;

Badge.defaultProps = {
    size: 'small',
    overflowCount: 99,
    dot: false,
    corner: false
};
module.exports = exports['default'];