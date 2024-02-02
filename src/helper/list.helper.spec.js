"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_helper_1 = require("./list.helper");
describe('listHelper', function () {
    test('should return a dir path of the zoo', function () {
        var result = (0, list_helper_1.listHelper)();
        expect(result).not.toBeNull();
        expect(result.length).not.toBeUndefined();
    });
});
