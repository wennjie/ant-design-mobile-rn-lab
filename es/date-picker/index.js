import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
import PropTypes from 'prop-types';
import React from 'react';
import PickerStyles from '../picker/style/index';
import { WithTheme } from '../style';
import { getComponentLocale } from '../_util/getLocale';
import AntDatePicker from './datepicker';
import PopupDatePicker from './datepicker/Popup';
import { formatProps } from './utils';

var DatePicker = function (_React$Component) {
    _inherits(DatePicker, _React$Component);

    function DatePicker() {
        _classCallCheck(this, DatePicker);

        var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).apply(this, arguments));

        _this.ref = null;
        return _this;
    }

    _createClass(DatePicker, [{
        key: 'show',
        value: function show() {
            this.ref.show();
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.ref.hide();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _a = this.props,
                children = _a.children,
                value = _a.value,
                defaultDate = _a.defaultDate,
                itemStyle = _a.itemStyle,
                restProps = __rest(_a, ["children", "value", "defaultDate", "itemStyle"]);
            var locale = getComponentLocale(this.props, this.context, 'DatePicker', function () {
                return require('./locale/zh_CN');
            });
            var okText = locale.okText,
                dismissText = locale.dismissText,
                extra = locale.extra,
                DatePickerLocale = locale.DatePickerLocale;

            var dataPicker = React.createElement(AntDatePicker, { minuteStep: this.props.minuteStep, locale: DatePickerLocale, mode: this.props.mode, minDate: this.props.minDate, maxDate: this.props.maxDate, defaultDate: defaultDate, date: value, onValueChange: this.props.onValueChange, itemStyle: itemStyle });
            return React.createElement(
                WithTheme,
                { styles: restProps.styles, themeStyles: PickerStyles },
                function (styles) {
                    return React.createElement(
                        PopupDatePicker,
                        _extends({ datePicker: dataPicker }, restProps, { styles: styles, date: value, dismissText: _this2.props.dismissText || dismissText, okText: _this2.props.okText || okText, ref: function ref(_ref) {
                                _this2.ref = _ref;
                            } }),
                        children && React.isValidElement(children) && React.cloneElement(children, {
                            extra: value ? formatProps(_this2.props, value) : _this2.props.extra || extra
                        })
                    );
                }
            );
        }
    }]);

    return DatePicker;
}(React.Component);

export default DatePicker;

DatePicker.defaultProps = {
    mode: 'datetime',
    triggerType: 'onPress',
    minuteStep: 1
};
DatePicker.contextTypes = {
    antLocale: PropTypes.object
};