'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

exports['default'] = function (theme) {
    return _reactNative.StyleSheet.create({
        grayBorderBox: {
            borderColor: theme.border_color_base
        },
        icon: {
            width: theme.icon_size_md,
            height: theme.icon_size_md
        },
        text: {
            fontSize: theme.font_size_caption_sm,
            color: theme.color_text_base,
            marginTop: theme.v_spacing_md
        }
    });
};

module.exports = exports['default'];