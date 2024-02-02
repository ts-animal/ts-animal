"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var dance_command_1 = require("./dance.command");
var option_argv_helper_1 = require("../helper/option.argv.helper");
jest.mock('../animal-generator');
jest.mock('../helper/option.argv.helper');
describe('dance command', function () {
    var spyLog;
    var mockAnimal = 'tiger';
    var mockOptionArgvHelper;
    beforeEach(function () {
        spyLog = jest.spyOn(console, 'log').mockImplementation(function () { return null; });
        mockOptionArgvHelper = jest.fn();
    });
    afterEach(function () {
        spyLog.mockClear();
        jest.clearAllMocks();
    });
    test('dance() should be run', function () {
        (0, dance_command_1.dance)(mockAnimal);
        expect(option_argv_helper_1.OptionArgvHelper).toHaveBeenCalledTimes(1);
    });
    test('should log the animal exist', function () {
        var result = (0, child_process_1.execSync)("ts-node src/index.ts ".concat(mockAnimal, " --repeat=1"), {
            encoding: 'utf8',
        });
        expect(result).not.toBeNull();
    });
});
