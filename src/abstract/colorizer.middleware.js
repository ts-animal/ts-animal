"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colorizer = void 0;
var color_helper_1 = require("../helper/color.helper");
var Colorizer = /** @class */ (function () {
    function Colorizer() {
    }
    Colorizer.randomColorize = function (content) {
        var randomColor = (0, color_helper_1.getRandomColor)();
        return "".concat(randomColor).concat(content).concat(color_helper_1.COLOR.reset);
    };
    Colorizer.colorize = function (type, content) {
        return "".concat(color_helper_1.COLOR[type]).concat(content).concat(color_helper_1.COLOR.reset);
    };
    return Colorizer;
}());
exports.Colorizer = Colorizer;
