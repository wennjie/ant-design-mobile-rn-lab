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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../picker/style/index');

var _index2 = _interopRequireDefault(_index);

var _style = require('../style');

var _getLocale = require('../_util/getLocale');

var _datepicker = require('./datepicker');

var _datepicker2 = _interopRequireDefault(_datepicker);

var _Popup = require('./datepicker/Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _utils = require('./utils');

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

var DatePicker = function (_React$Component) {
    (0, _inherits3['default'])(DatePicker, _React$Component);

    function DatePicker() {
        (0, _classCallCheck3['default'])(this, DatePicker);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).apply(this, arguments));

        _this.ref = null;
        return _this;
    }

    (0, _createClass3['default'])(DatePicker, [{
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
            var locale = (0, _getLocale.getComponentLocale)(this.props, this.context, 'DatePicker', function () {
                return require('./locale/zh_CN');
            });
            var okText = locale.okText,
                dismissText = locale.dismissText,
                extra = locale.extra,
                DatePickerLocale = locale.DatePickerLocale;

            var dataPicker = _react2['default'].createElement(_datepicker2['default'], { minuteStep: this.props.minuteStep, locale: DatePickerLocale, mode: this.props.mode, minDate: this.props.minDate, maxDate: this.props.maxDate, defaultDate: defaultDate, date: value, onValueChange: this.props.onValueChange, itemStyle: itemStyle });
            return _react2['default'].createElement(
                _style.WithTheme,
                { styles: restProps.styles, themeStyles: _index2['default'] },
                function (styles) {
                    return _react2['default'].createElement(
                        _Popup2['default'],
                        (0, _extends3['default'])({ datePicker: dataPicker }, restProps, { styles: styles, date: value, dismissText: _this2.props.dismissText || dismissText, okText: _this2.props.okText || okText, ref: function ref(_ref) {
                                _this2.ref = _ref;
                            } }),
                        children && _react2['default'].isValidElement(children) && _react2['default'].cloneElement(children, {
                            extra: value ? (0, _utils.formatProps)(_this2.props, value) : _this2.props.extra || extra
                        })
                    );
                }
            );
        }
    }]);
    return DatePicker;
}(_react2['default'].Component);

exports['default'] = DatePicker;

DatePicker.defaultProps = {
    mode: 'datetime',
    triggerType: 'onPress',
    minuteStep: 1
};
DatePicker.contextTypes = {
    antLocale: _propTypes2['default'].object
};
module.exports = exports['default'];