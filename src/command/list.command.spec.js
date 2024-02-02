"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var list_helper_1 = require("../helper/list.helper");
var list_command_1 = require("./list.command");
describe('version command', function () {
    var spyLog;
    var mockList = (0, list_helper_1.listHelper)().join(', ');
    beforeEach(function () {
        spyLog = jest.spyOn(console, 'log').mockImplementation(function () { return null; });
    });
    afterEach(function () {
        spyLog.mockClear();
    });
    test('list() shoud print list', function () {
        var returns = (0, list_command_1.list)();
        expect(spyLog).toHaveBeenCalledWith(mockList);
        expect(returns).toEqual(mockList);
    });
    test('should log the list message with child_process', function (done) {
        (0, child_process_1.exec)('ts-node src/index.ts list', { encoding: 'utf8' }, function (error, stdout) {
            if (error) {
                done.fail(error);
                return;
            }
            expect(stdout).toMatch(mockList);
            done();
        });
    });
});
