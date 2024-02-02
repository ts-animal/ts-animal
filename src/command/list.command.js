"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = void 0;
var list_helper_1 = require("../helper/list.helper");
function list() {
    var print = (0, list_helper_1.listHelper)().join(', ');
    console.log(print);
    return print;
}
exports.list = list;
