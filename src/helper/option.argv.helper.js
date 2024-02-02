"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionArgvHelper = void 0;
var option_type_1 = require("../type/option.type");
var help_command_1 = require("../command/help.command");
var OptionArgvHelper = function (argv) {
    var o = new option_type_1.OptionType();
    for (var _i = 0, argv_1 = argv; _i < argv_1.length; _i++) {
        var arg = argv_1[_i];
        if (!arg.includes('--'))
            continue;
        var _a = arg.replace('--', '').split('='), k = _a[0], v = _a[1];
        if (!Object.keys(o).includes(k)) {
            console.error('UnknownOption');
            (0, help_command_1.help)();
            process.exit(1);
        }
        o[k] = v;
    }
    return o;
};
exports.OptionArgvHelper = OptionArgvHelper;
