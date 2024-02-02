"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var colorHelper = __importStar(require("../helper/color.helper"));
var colors_command_1 = require("./colors.command");
jest.mock('../helper/color.helper', function () { return ({
    listColors: jest
        .fn()
        .mockReturnValue('\x1B[30mblack\x1B[0m, \x1B[31mred\x1B[0m, \x1B[32mgreen\x1B[0m, \x1B[33myellow\x1B[0m, \x1B[34mblue\x1B[0m, \x1B[35mmagenta\x1B[0m, \x1B[36mcyan\x1B[0m, \x1B[37mwhite\x1B[0m, \x1B[91mbrightRed\x1B[0m, \x1B[92mbrightGreen\x1B[0m, \x1B[93mbrightYellow\x1B[0m, \x1B[94mbrightBlue\x1B[0m, \x1B[95mbrightMagenta\x1B[0m, \x1B[96mbrightCyan\x1B[0m, \x1B[97mbrightWhite\x1B[0m\n'),
}); });
describe('colors command', function () {
    var spyLog;
    var mockColorsList = colorHelper.listColors();
    beforeEach(function () {
        spyLog = jest.spyOn(console, 'log').mockImplementation(function () { });
    });
    afterEach(function () {
        spyLog.mockClear();
    });
    test('colors() should list colors', function () {
        var returns = (0, colors_command_1.colors)();
        expect(spyLog).toHaveBeenCalledWith(mockColorsList);
        expect(returns).toEqual(mockColorsList);
    });
    test('should log the colors to the console', function () {
        var result = (0, child_process_1.execSync)('ts-node src/index.ts colors', {
            encoding: 'utf8',
        });
        expect(result).toEqual(mockColorsList);
    });
});
