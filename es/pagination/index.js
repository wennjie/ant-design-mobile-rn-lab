import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';
import Button from '../button/index';
import Flex from '../flex/index';
import { WithTheme } from '../style';
import { getComponentLocale } from '../_util/getLocale';
import zh_CN from './locale/zh_CN';
import PaginationStyles from './style/index';

var Pagination = function (_React$Component) {
    _inherits(Pagination, _React$Component);

    function Pagination(props) {
        _classCallCheck(this, Pagination);

        var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

        _this.state = {
            current: props.current
        };
        return _this;
    }

    _createClass(Pagination, [{
        key: 'UNSAFE_componentWillReceiveProps',
        value: function UNSAFE_componentWillReceiveProps(nextProps) {
            if (nextProps.current !== this.state.current) {
                this.setState({
                    current: nextProps.current
                });
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(p) {
            this.setState({
                current: p
            });
            if (this.props.onChange) {
                this.props.onChange(p);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                style = _props.style,
                mode = _props.mode,
                total = _props.total,
                simple = _props.simple;

            var locale = getComponentLocale(this.props, this.context, 'Pagination', function () {
                return zh_CN;
            });
            var prevText = locale.prevText,
                nextText = locale.nextText;

            return React.createElement(
                WithTheme,
                { styles: this.props.styles, themeStyles: PaginationStyles },
                function (styles) {
                    var current = _this2.state.current;

                    var simpleItem = !simple ? React.createElement(
                        Flex.Item,
                        null,
                        React.createElement(
                            View,
                            { style: [styles.numberStyle] },
                            React.createElement(
                                Text,
                                { style: [styles.activeTextStyle] },
                                current
                            ),
                            React.createElement(
                                Text,
                                { style: [styles.totalStyle] },
                                '/',
                                total
                            )
                        )
                    ) : React.createElement(Flex.Item, null);
                    var markup = React.createElement(
                        Flex,
                        null,
                        React.createElement(
                            Flex.Item,
                            null,
                            React.createElement(
                                Button,
                                { disabled: current <= 1, onPress: function onPress() {
                                        return _this2.onChange(current - 1);
                                    } },
                                prevText
                            )
                        ),
                        simpleItem,
                        React.createElement(
                            Flex.Item,
                            null,
                            React.createElement(
                                Button,
                                { disabled: current >= total, onPress: function onPress() {
                                        return _this2.onChange(current + 1);
                                    } },
                                nextText
                            )
                        )
                    );
                    if (mode === 'number') {
                        markup = React.createElement(
                            View,
                            { style: [styles.numberStyle] },
                            React.createElement(
                                Text,
                                { style: [styles.activeTextStyle] },
                                current
                            ),
                            React.createElement(
                                Text,
                                { style: [styles.totalStyle] },
                                '/',
                                total
                            )
                        );
                    } else if (mode === 'pointer') {
                        var arr = [];
                        for (var i = 0; i < total; i++) {
                            arr.push(React.createElement(View, { key: 'dot-' + i
                                // tslint:disable-next-line:jsx-no-multiline-js
                                , style: [styles.pointStyle, styles.spaceStyle, i + 1 === current && styles.pointActiveStyle] }));
                        }
                        markup = React.createElement(
                            View,
                            { style: [styles.indicatorStyle, _this2.props.indicatorStyle] },
                            arr
                        );
                    }
                    return React.createElement(
                        View,
                        { style: [styles.container, style] },
                        markup
                    );
                }
            );
        }
    }]);

    return Pagination;
}(React.Component);

export default Pagination;

Pagination.defaultProps = {
    mode: 'button',
    current: 1,
    total: 0,
    simple: false,
    onChange: function onChange() {},
    indicatorStyle: null
};
Pagination.contextTypes = {
    antLocale: PropTypes.object
};