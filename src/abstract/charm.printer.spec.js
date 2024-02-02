"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var charm_printer_1 = require("./charm.printer");
describe('CharmPrinter', function () {
    var charmPrinter;
    beforeEach(function () {
        charmPrinter = new charm_printer_1.CharmPrinter();
    });
    test('should print to the terminal', function () {
        var spyWrite = jest
            .spyOn(process.stdout, 'write')
            .mockImplementation(function () { return null; });
        var content = 'some content';
        charmPrinter.print(content);
        expect(spyWrite).toHaveBeenCalledWith(content);
    });
    test('should reset the terminal', function () {
        charmPrinter.printer.reset = jest.fn();
        charmPrinter.clearTerminal();
        expect(charmPrinter.printer.reset).toHaveBeenCalled();
    });
    test('should colorize content with a specific color', function () {
        var spyWrite = jest
            .spyOn(process.stdout, 'write')
            .mockImplementation(function () { return null; });
        var content = '\x1b[31msome content\x1b[0m';
        charmPrinter.color = 'red';
        charmPrinter.print(content);
        expect(spyWrite).toHaveBeenCalledWith('\x1b[31msome content\x1b[0m');
    });
    test('should random colorize content', function () {
        var spyWrite = jest
            .spyOn(process.stdout, 'write')
            .mockImplementation(function () { return null; });
        var content = '\x1b[31msome content\x1b[0m';
        charmPrinter.randomColor = true;
        charmPrinter.print(content);
        expect(spyWrite).toHaveBeenCalledWith('\x1b[31msome content\x1b[0m');
    });
});
