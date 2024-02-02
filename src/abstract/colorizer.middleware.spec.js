"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_helper_1 = require("../helper/color.helper");
var colorizer_middleware_1 = require("./colorizer.middleware");
jest.mock('../helper/color.helper', function () { return ({
    getRandomColor: jest.fn(),
    COLOR: { reset: '\x1b[0m', red: '\x1b[31m' },
}); });
describe('Colorizer', function () {
    describe('randomColorize', function () {
        test('should random colorize content', function () {
            color_helper_1.getRandomColor.mockReturnValueOnce('\x1b[91m');
            var content = 'some content';
            var result = colorizer_middleware_1.Colorizer.randomColorize(content);
            expect(result).toEqual('\x1b[91msome content\x1b[0m');
        });
    });
    describe('colorize', function () {
        test('should colorize content with a specific color', function () {
            var content = 'some content';
            var result = colorizer_middleware_1.Colorizer.colorize('red', content);
            expect(result).toEqual('\x1b[31msome content\x1b[0m');
        });
    });
});
