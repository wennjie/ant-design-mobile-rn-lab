import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:no-console */
import React from 'react';
import { View } from 'react-native';
import { Button, DatePicker, List } from '../../';
// const now = new Date();

var PopupExample = function (_React$Component) {
    _inherits(PopupExample, _React$Component);

    function PopupExample(props) {
        _classCallCheck(this, PopupExample);

        var _this = _possibleConstructorReturn(this, (PopupExample.__proto__ || Object.getPrototypeOf(PopupExample)).call(this, props));

        _this.ref = null;
        _this.onChange = function (value) {
            _this.setState({ value: value });
        };
        _this.state = {
            value: undefined
        };
        return _this;
    }

    _createClass(PopupExample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                View,
                null,
                React.createElement(
                    List,
                    null,
                    React.createElement(
                        Button,
                        { onPress: function onPress() {
                                console.log(_this2.ref.show());
                            } },
                        'TEST'
                    ),
                    React.createElement(
                        DatePicker,
                        { value: this.state.value, mode: 'date', defaultDate: new Date(), minDate: new Date(2015, 7, 6), maxDate: new Date(2026, 11, 3), onChange: this.onChange, format: 'YYYY-MM-DD', ref: function ref(e) {
                                _this2.ref = e;
                            } },
                        React.createElement(
                            List.Item,
                            { arrow: 'horizontal' },
                            'Select Date'
                        )
                    )
                )
            );
        }
    }]);

    return PopupExample;
}(React.Component);

export default PopupExample;