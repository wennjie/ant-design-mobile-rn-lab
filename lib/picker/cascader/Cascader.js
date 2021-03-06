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

var _arrayTreeFilter = require('array-tree-filter');

var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MultiPicker = require('../MultiPicker');

var _MultiPicker2 = _interopRequireDefault(_MultiPicker);

var _Picker = require('../Picker');

var _Picker2 = _interopRequireDefault(_Picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Cascader = function (_React$Component) {
    (0, _inherits3['default'])(Cascader, _React$Component);

    function Cascader() {
        (0, _classCallCheck3['default'])(this, Cascader);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Cascader.__proto__ || Object.getPrototypeOf(Cascader)).apply(this, arguments));

        _this.state = {
            value: _this.getValue(_this.props.data, _this.props.defaultValue || _this.props.value)
        };
        _this.onValueChange = function (value, index) {
            var children = (0, _arrayTreeFilter2['default'])(_this.props.data, function (c, level) {
                return level <= index && c.value === value[level];
            });
            var data = children[index];
            var i = void 0;
            for (i = index + 1; data && data.children && data.children.length && i < _this.props.cols; i++) {
                data = data.children[0];
                value[i] = data.value;
            }
            value.length = i;
            if (!('value' in _this.props)) {
                _this.setState({
                    value: value
                });
            }
            if (_this.props.onChange) {
                _this.props.onChange(value);
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(Cascader, [{
        key: 'UNSAFE_componentWillReceiveProps',
        value: function UNSAFE_componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: this.getValue(nextProps.data, nextProps.value)
                });
            }
        }
    }, {
        key: 'getValue',
        value: function getValue(d, val) {
            var data = d || this.props.data;
            var value = val || this.props.value || this.props.defaultValue;
            var level = 0;
            var nextValue = [];
            if (value && value.length) {
                do {
                    var index = data.findIndex(function (item) {
                        return item.value === value[level];
                    });
                    if (index < 0) {
                        break;
                    }
                    nextValue[level] = value[level];
                    level += 1;
                    data = data[index].children || [];
                } while (data.length > 0);
            }
            for (var i = level; i < this.props.cols; i++) {
                if (data && data.length) {
                    nextValue[i] = data[0].value;
                    data = data[0].children;
                } else {
                    break;
                }
            }
            return nextValue;
        }
    }, {
        key: 'getCols',
        value: function getCols() {
            var _props = this.props,
                data = _props.data,
                cols = _props.cols,
                disabled = _props.disabled,
                pickerItemStyle = _props.pickerItemStyle,
                indicatorStyle = _props.indicatorStyle;

            var value = this.state.value;
            var childrenTree = (0, _arrayTreeFilter2['default'])(data, function (c, level) {
                return c.value === value[level];
            }).map(function (c) {
                return c.children;
            });
            // in case the users data is async get when select change
            var needPad = cols - childrenTree.length;
            if (needPad > 0) {
                for (var i = 0; i < needPad; i++) {
                    childrenTree.push([]);
                }
            }
            childrenTree.length = cols - 1;
            childrenTree.unshift(data);
            return childrenTree.map(function () {
                var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                var level = arguments[1];
                return _react2['default'].createElement(
                    _Picker2['default'],
                    { key: level, style: { flex: 1 }, disabled: disabled, itemStyle: pickerItemStyle, indicatorStyle: indicatorStyle },
                    children.map(function (item) {
                        return _react2['default'].createElement(
                            _Picker2['default'].Item,
                            { value: item.value, key: item.value },
                            item.label
                        );
                    })
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;
            var rootNativeProps = props.rootNativeProps,
                style = props.style;

            var cols = this.getCols();
            return _react2['default'].createElement(
                _MultiPicker2['default'],
                { style: [{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }, style], selectedValue: this.state.value, rootNativeProps: rootNativeProps, onValueChange: this.onValueChange, onScrollChange: props.onScrollChange },
                cols
            );
        }
    }]);
    return Cascader;
}(_react2['default'].Component);

Cascader.defaultProps = {
    cols: 3,
    data: [],
    disabled: false
};
exports['default'] = Cascader;
module.exports = exports['default'];