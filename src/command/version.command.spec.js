"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var version_command_1 = require("./version.command");
var package_json_1 = require("../../package.json");
describe('version command', function () {
    var spyLog;
    var mockVersion = 'v' + package_json_1.version;
    beforeEach(function () {
        spyLog = jest.spyOn(console, 'log').mockImplementation(function () { return null; });
    });
    afterEach(function () {
        spyLog.mockClear();
    });
    test('v() shoud print version', function () {
        var returns = (0, version_command_1.v)();
        expect(spyLog).toHaveBeenCalledWith(mockVersion);
        expect(returns).toEqual(mockVersion);
    });
    test('should log the version message with child_process', function () {
        var result = (0, child_process_1.execSync)('ts-node src/index.ts version', {
            encoding: 'utf8',
        });
        expect(result).toMatch(mockVersion);
    });
});
