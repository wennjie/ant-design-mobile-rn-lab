'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Marquee = function (_React$PureComponent) {
    (0, _inherits3['default'])(Marquee, _React$PureComponent);

    function Marquee(props) {
        (0, _classCallCheck3['default'])(this, Marquee);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Marquee.__proto__ || Object.getPrototypeOf(Marquee)).call(this, props));

        _this.onLayout = function (e) {
            if (_this.state.twidth) {
                return;
            }
            _this.setState({
                twidth: e.nativeEvent.layout.width
            }, function () {
                // onLayout may be earlier than onLayoutContainer on android, can not be sure width < twidth at that time.
                _this.tryStart();
            });
        };
        _this.onLayoutContainer = function (e) {
            if (!_this.state.width) {
                _this.setState({
                    width: e.nativeEvent.layout.width
                }, function () {
                    _this.left.setValue(0);
                    _this.tryStart();
                });
            }
        };
        _this.startMove = function () {
            var _this$props = _this.props,
                _this$props$fps = _this$props.fps,
                fps = _this$props$fps === undefined ? 40 : _this$props$fps,
                loop = _this$props.loop;

            var SPPED = 1 / fps * 1000;
            // tslint:disable-next-line:no-this-assignment
            var props = _this.props;

            _reactNative.Animated.timing(_this.left, {
                toValue: 1,
                duration: _this.state.twidth * SPPED,
                easing: _reactNative.Easing.linear,
                delay: props.leading,
                isInteraction: false,
                useNativeDriver: true
            }).start(function () {
                if (loop) {
                    _this.moveToHeader();
                }
            });
        };
        _this.moveToHeader = function () {
            _reactNative.Animated.timing(_this.left, {
                toValue: 0,
                duration: 0,
                delay: _this.props.trailing,
                isInteraction: false,
                useNativeDriver: true
            }).start(function () {
                _this.startMove();
            });
        };
        _this.texts = {};
        _this.left = new _reactNative.Animated.Value(0);
        _this.state = {
            twidth: 0,
            width: 0
        };
        return _this;
    }

    (0, _createClass3['default'])(Marquee, [{
        key: 'tryStart',
        value: function tryStart() {
            if (this.state.twidth > this.state.width && this.state.width) {
                this.startMove();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                width = _state.width,
                twidth = _state.twidth;
            var _props = this.props,
                style = _props.style,
                text = _props.text,
                maxWidth = _props.maxWidth;

            var textChildren = _react2['default'].createElement(
                _reactNative.Text,
                { onLayout: this.onLayout, numberOfLines: 1, ellipsizeMode: 'tail', style: style },
                text
            );
            return _react2['default'].createElement(
                _reactNative.View,
                { style: { flex: 1, flexDirection: 'row', alignItems: 'center' }, onLayout: this.onLayoutContainer },
                _react2['default'].createElement(
                    _reactNative.Animated.View,
                    {
                        // tslint:disable-next-line:jsx-no-multiline-js
                        style: {
                            flexDirection: 'row',
                            transform: [{
                                translateX: this.left.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -twidth + width]
                                })
                            }],
                            width: maxWidth
                        } },
                    textChildren
                )
            );
        }
    }]);
    return Marquee;
}(_react2['default'].PureComponent);

Marquee.defaultProps = {
    text: '',
    loop: false,
    leading: 500,
    trailing: 800,
    fps: 40,
    maxWidth: 1000
};
exports['default'] = Marquee;
module.exports = exports['default'];