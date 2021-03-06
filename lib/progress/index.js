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

var _style = require('../style');

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Progress = function (_React$Component) {
    (0, _inherits3['default'])(Progress, _React$Component);

    function Progress(props) {
        (0, _classCallCheck3['default'])(this, Progress);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).call(this, props));

        _this.onLayout = function (e) {
            _this.setState({
                wrapWidth: e.nativeEvent.layout.width
            });
        };
        _this.normalPercent = function (percent) {
            var widthPercent = 0;
            if (percent !== undefined && percent > 0) {
                widthPercent = percent > 100 ? 100 : percent;
            }
            return widthPercent;
        };
        _this.getWidth = function () {
            var percent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.percent;

            return _this.state.wrapWidth * (_this.normalPercent(percent) / 100);
        };
        _this.state = {
            wrapWidth: props.wrapWidth || _reactNative.Dimensions.get('window').width,
            percentage: new _reactNative.Animated.Value(0)
        };
        return _this;
    }

    (0, _createClass3['default'])(Progress, [{
        key: 'UNSAFE_componentWillReceiveProps',
        value: function UNSAFE_componentWillReceiveProps(nextProps) {
            if (nextProps.wrapWidth !== this.props.wrapWidth) {
                this.setState({ wrapWidth: nextProps.wrapWidth });
            }
            if (this.props.appearTransition && nextProps.percent !== this.props.percent) {
                this.setState({
                    percentage: new _reactNative.Animated.Value(this.getWidth(nextProps.percent))
                });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.appearTransition) {
                this.state.percentage.setValue(0);
                _reactNative.Animated.timing(this.state.percentage, {
                    toValue: this.getWidth(),
                    duration: 1000,
                    useNativeDriver: true
                }).start();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                position = _props.position,
                unfilled = _props.unfilled,
                style = _props.style,
                barStyle = _props.barStyle;

            var percentStyle = {
                width: this.getWidth(),
                height: 0
            };
            return _react2['default'].createElement(
                _style.WithTheme,
                { styles: this.props.styles, themeStyles: _index2['default'] },
                function (styles) {
                    var child = _react2['default'].createElement(_reactNative.View, { style: [styles.progressBar, percentStyle, barStyle] });
                    if (_this2.props.appearTransition) {
                        percentStyle.width = _this2.state.percentage;
                        child = _react2['default'].createElement(_reactNative.Animated.View, { style: [styles.progressBar, percentStyle, barStyle] });
                    }
                    var outerStyle = [styles.progressOuter, position === 'fixed' ? { position: 'absolute', top: 0 } : {}, !unfilled ? { backgroundColor: 'transparent' } : {}, style];
                    return _react2['default'].createElement(
                        _reactNative.View,
                        { onLayout: _this2.onLayout, style: outerStyle },
                        child
                    );
                }
            );
        }
    }]);
    return Progress;
}(_react2['default'].Component);

exports['default'] = Progress;

Progress.defaultProps = {
    percent: 0,
    position: 'normal',
    unfilled: true,
    appearTransition: false
};
module.exports = exports['default'];