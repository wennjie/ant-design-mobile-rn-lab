import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Platform, Text, TouchableWithoutFeedback, View } from 'react-native';
import { WithTheme } from '../style';
import TagStyles from './style/index';

var Tag = function (_React$Component) {
    _inherits(Tag, _React$Component);

    function Tag(props) {
        _classCallCheck(this, Tag);

        var _this = _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this, props));

        _this.onPress = function () {
            var _this$props = _this.props,
                disabled = _this$props.disabled,
                onChange = _this$props.onChange;

            if (disabled) {
                return;
            }
            var isSelect = _this.state.selected;
            _this.setState({
                selected: !isSelect
            }, function () {
                if (onChange) {
                    onChange(!isSelect);
                }
            });
        };
        _this.handleLongPress = function () {
            var _this$props2 = _this.props,
                disabled = _this$props2.disabled,
                onLongPress = _this$props2.onLongPress;

            if (disabled) {
                return;
            }
            if (onLongPress) {
                onLongPress();
            }
        };
        _this.onTagClose = function () {
            if (_this.props.onClose) {
                _this.props.onClose();
            }
            _this.setState({
                closed: true
            }, _this.props.afterClose);
        };
        _this.onPressIn = function (styles) {
            return function () {
                if (_this.closeDom) {
                    _this.closeDom.setNativeProps({
                        style: [styles.close, Platform.OS === 'ios' ? styles.closeIOS : styles.closeAndroid, {
                            backgroundColor: '#888'
                        }]
                    });
                }
            };
        };
        _this.onPressOut = function (styles) {
            return function () {
                if (_this.closeDom) {
                    _this.closeDom.setNativeProps({
                        style: [styles.close, Platform.OS === 'ios' ? styles.closeIOS : styles.closeAndroid]
                    });
                }
            };
        };
        _this.state = {
            selected: props.selected,
            closed: false
        };
        return _this;
    }

    _createClass(Tag, [{
        key: 'UNSAFE_componentWillReceiveProps',
        value: function UNSAFE_componentWillReceiveProps(nextProps) {
            if (this.props.selected !== nextProps.selected) {
                this.setState({
                    selected: nextProps.selected
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                children = _props.children,
                disabled = _props.disabled,
                small = _props.small,
                closable = _props.closable,
                style = _props.style;

            var selected = this.state.selected;
            return React.createElement(
                WithTheme,
                { styles: this.props.styles, themeStyles: TagStyles },
                function (styles) {
                    var wrapStyle = void 0;
                    var textStyle = void 0;
                    if (!selected && !disabled) {
                        wrapStyle = styles.normalWrap;
                        textStyle = styles.normalText;
                    }
                    if (selected && !disabled) {
                        wrapStyle = styles.activeWrap;
                        textStyle = styles.activeText;
                    }
                    if (disabled) {
                        wrapStyle = styles.disabledWrap;
                        textStyle = styles.disabledText;
                    }
                    var sizeWrapStyle = small ? styles.wrapSmall : {};
                    var sizeTextStyle = small ? styles.textSmall : {};
                    var closableDom = closable && !small && !disabled ? React.createElement(
                        TouchableWithoutFeedback,
                        { onPressIn: _this2.onPressIn(styles), onPressOut: _this2.onPressOut(styles), onPress: _this2.onTagClose },
                        React.createElement(
                            View,
                            { ref: function ref(component) {
                                    return _this2.closeDom = component;
                                }, style: [styles.close, Platform.OS === 'ios' ? styles.closeIOS : styles.closeAndroid] },
                            React.createElement(
                                Text,
                                { style: [styles.closeText, Platform.OS === 'android' ? styles.closeTransform : {}] },
                                '\xD7'
                            )
                        )
                    ) : null;
                    return !_this2.state.closed ? React.createElement(
                        View,
                        { style: [styles.tag, style] },
                        React.createElement(
                            TouchableWithoutFeedback,
                            { onPress: _this2.onPress, onLongPress: _this2.handleLongPress },
                            React.createElement(
                                View,
                                { style: [styles.wrap, sizeWrapStyle, wrapStyle] },
                                React.createElement(
                                    Text,
                                    { style: [styles.text, sizeTextStyle, textStyle] },
                                    children,
                                    ' '
                                )
                            )
                        ),
                        closableDom
                    ) : null;
                }
            );
        }
    }]);

    return Tag;
}(React.Component);

export default Tag;

Tag.defaultProps = {
    disabled: false,
    small: false,
    selected: false,
    closable: false,
    onClose: function onClose() {},
    afterClose: function afterClose() {},
    onChange: function onChange() {},
    onLongPress: function onLongPress() {}
};