"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
describe('main script', function () {
    test('should execute main function', function () {
        var result = (0, child_process_1.execSync)("ts-node src/index tiger --repeat=1");
        expect(result).not.toBeNull();
    });
});
