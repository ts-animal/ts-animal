"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = void 0;
var color_helper_1 = require("../helper/color.helper");
function colors() {
    var print = (0, color_helper_1.listColors)();
    console.log(print);
    return print;
}
exports.colors = colors;
