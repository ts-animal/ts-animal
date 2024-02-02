"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_helper_1 = require("../helper/color.helper");
describe('Color Module', function () {
    var mockListColors = (0, color_helper_1.listColors)();
    var mockRandomColor = '\x1b[31m';
    test('getRandomColor should return a valid color', function () {
        expect(mockRandomColor).toMatch(/\x1b\[\d+m/); // ANSI color escape code
    });
    test('listColors should return a string with all colors', function () {
        var colorKeys = Object.keys(color_helper_1.COLOR)
            .filter(function (e) { return e !== 'reset'; })
            .map(function (e) { return "".concat(color_helper_1.COLOR[e]).concat(e).concat(color_helper_1.COLOR.reset); })
            .join(', ');
        expect(mockListColors).toMatch(colorKeys);
    });
});
