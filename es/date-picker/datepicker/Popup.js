import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PopupPicker from '../../picker/Popup';

var PopupDatePicker = function (_React$Component) {
    _inherits(PopupDatePicker, _React$Component);

    function PopupDatePicker() {
        _classCallCheck(this, PopupDatePicker);

        var _this = _possibleConstructorReturn(this, (PopupDatePicker.__proto__ || Object.getPrototypeOf(PopupDatePicker)).apply(this, arguments));

        _this.onOk = function (v) {
            var _this$props = _this.props,
                onChange = _this$props.onChange,
                onOk = _this$props.onOk;

            if (onChange) {
                onChange(v);
            }
            if (onOk) {
                onOk(v);
            }
        };
        _this.ref = null;
        return _this;
    }

    _createClass(PopupDatePicker, [{
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

            return React.createElement(PopupPicker, _extends({ picker: this.props.datePicker, value: this.props.date }, this.props, { onOk: this.onOk, ref: function ref(e) {
                    _this2.ref = e;
                } }));
        }
    }]);

    return PopupDatePicker;
}(React.Component);

PopupDatePicker.defaultProps = {
    pickerValueProp: 'date',
    pickerValueChangeProp: 'onDateChange'
};
export default PopupDatePicker;