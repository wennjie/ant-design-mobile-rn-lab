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
import React from 'react';
import { Text, View } from 'react-native';
import { WithTheme } from '../style';
import Item from './ListItem';
import listStyles from './style/index';

var List = function (_React$Component) {
    _inherits(List, _React$Component);

    function List() {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    _createClass(List, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                children = _a.children,
                style = _a.style,
                renderHeader = _a.renderHeader,
                renderFooter = _a.renderFooter,
                styles = _a.styles,
                restProps = __rest(_a, ["children", "style", "renderHeader", "renderFooter", "styles"]);
            return React.createElement(
                WithTheme,
                { styles: styles, themeStyles: listStyles },
                function (s) {
                    var headerDom = null;
                    var footerDom = null;
                    if (renderHeader) {
                        var content = typeof renderHeader === 'function' ? renderHeader() : renderHeader;
                        if (typeof content === 'string') {
                            content = React.createElement(
                                Text,
                                { style: s.Header },
                                content
                            );
                        }
                        headerDom = React.createElement(
                            View,
                            null,
                            content
                        );
                    }
                    if (renderFooter) {
                        var _content = typeof renderFooter === 'function' ? renderFooter() : renderFooter;
                        if (typeof _content === 'string') {
                            _content = React.createElement(
                                Text,
                                { style: s.Footer },
                                _content
                            );
                        }
                        footerDom = React.createElement(
                            View,
                            null,
                            _content
                        );
                    }
                    return React.createElement(
                        View,
                        _extends({}, restProps, { style: style }),
                        headerDom,
                        React.createElement(
                            View,
                            { style: s.Body },
                            children ? children : null,
                            React.createElement(View, { style: [s.BodyBottomLine] })
                        ),
                        footerDom
                    );
                }
            );
        }
    }]);

    return List;
}(React.Component);

export default List;

List.Item = Item;