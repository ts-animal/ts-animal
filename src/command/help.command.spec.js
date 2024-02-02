"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var help_command_1 = require("./help.command");
describe('help command', function () {
    var spyLog;
    var expectedHelpMessage = "\ndance {animal} {option}     show animal ascii animation.\n    --speed=[0~2000]        frame speed.\n    --repeat=[1~...]        repeat times. default is infinite.\n    --color=[random, ...]   color. default is white.\nlist                        show current animal list.\nhelp                        show current this helping message.\nversion                     show ts-animal version.\ncolors                      show supported colors.\n";
    beforeEach(function () {
        spyLog = jest.spyOn(console, 'log').mockImplementation(function () { });
    });
    afterEach(function () {
        spyLog.mockClear();
    });
    test('should log the help message on command', function () {
        var returns = (0, help_command_1.help)();
        expect(spyLog).toHaveBeenCalledWith(expectedHelpMessage);
        expect(returns).toEqual(expectedHelpMessage);
    });
    test('should log the help message', function () {
        var result = (0, child_process_1.execSync)('ts-node src/index.ts help', {
            encoding: 'utf8',
        });
        expect(result).toMatch(expectedHelpMessage);
    });
});
