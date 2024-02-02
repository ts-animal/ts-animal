"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharmPrinter = void 0;
var charm_1 = __importDefault(require("charm"));
var CharmPrinter = /** @class */ (function () {
    function CharmPrinter() {
        this.printer = (0, charm_1.default)();
        this.color = null;
        this.randomColor = false;
        this.printer.pipe(process['stdout']);
    }
    CharmPrinter.prototype.clearTerminal = function () {
        this.printer.reset();
    };
    CharmPrinter.prototype.print = function (content) {
        this.printer.write(content);
    };
    return CharmPrinter;
}());
exports.CharmPrinter = CharmPrinter;
