#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dance = void 0;
var command_type_1 = require("./type/command.type");
var dance_command_1 = require("./command/dance.command");
Object.defineProperty(exports, "dance", { enumerable: true, get: function () { return dance_command_1.dance; } });
var list_command_1 = require("./command/list.command");
var colors_command_1 = require("./command/colors.command");
var help_command_1 = require("./command/help.command");
var version_command_1 = require("./command/version.command");
var COMMAND = process.argv[2];
var ANIMAL = process.argv[3];
switch (COMMAND) {
    case command_type_1.CommandType.dance:
        (0, dance_command_1.dance)(ANIMAL);
        break;
    case command_type_1.CommandType.list:
        (0, list_command_1.list)();
        break;
    case command_type_1.CommandType.colors:
        (0, colors_command_1.colors)();
        break;
    case command_type_1.CommandType.help:
        (0, help_command_1.help)();
        break;
    case command_type_1.CommandType.version:
        (0, version_command_1.v)();
        break;
    default:
        console.error('Not Supported Command');
        (0, help_command_1.help)();
        break;
}
