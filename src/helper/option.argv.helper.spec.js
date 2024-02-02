"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var option_argv_helper_1 = require("./option.argv.helper");
describe('OptionArgvHelper', function () {
    test('should skip arguments with no options', function () {
        var argv = [''];
        var result = (0, option_argv_helper_1.OptionArgvHelper)(argv);
        expect(result).toEqual({
            color: 'white',
            repeat: Infinity,
            speed: 1800,
        });
    });
    test('should parse single argument correctly', function () {
        var argv = ['--speed=200'];
        var result = (0, option_argv_helper_1.OptionArgvHelper)(argv);
        expect(result).toEqual({
            color: 'white',
            repeat: Infinity,
            speed: '200',
        });
    });
    test('should parse multiple arguments correctly', function () {
        var argv = ['--speed=200', '--repeat=3'];
        var result = (0, option_argv_helper_1.OptionArgvHelper)(argv);
        expect(result).toEqual({
            color: 'white',
            speed: '200',
            repeat: '3',
        });
    });
    test('should throw error when option does not exist', function (done) {
        (0, child_process_1.exec)('ts-node src/index.ts tiger --unknownOption', { encoding: 'utf8' }, function (error) {
            if (error) {
                done.fail(error);
                return;
            }
            done();
        });
    });
});
