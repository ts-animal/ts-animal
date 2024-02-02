"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v = void 0;
var package_json_1 = require("../../package.json");
function v() {
    var print = 'v' + package_json_1.version;
    console.log(print);
    return print;
}
exports.v = v;
