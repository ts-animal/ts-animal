"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalGenerator = void 0;
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var list_helper_1 = require("./helper/list.helper");
var colorizer_middleware_1 = require("./abstract/colorizer.middleware");
var AnimalGenerator = /** @class */ (function () {
    function AnimalGenerator(animal, printer, option) {
        this.animal = animal;
        this.printer = printer;
        this.option = option;
        this.frames = [];
        if (!(0, list_helper_1.listHelper)().includes(animal))
            throw new Error("We don't know ".concat(animal));
        return this;
    }
    AnimalGenerator.prototype.setFrames = function () {
        var animalPath = path.join(list_helper_1.SRC_FOLDER, 'zoo', this.animal);
        var folder = fs.readdirSync(animalPath);
        for (var _i = 0, folder_1 = folder; _i < folder_1.length; _i++) {
            var filePath = folder_1[_i];
            this.frames.push(fs.readFileSync(path.join(animalPath, filePath), 'utf8'));
        }
    };
    AnimalGenerator.prototype.run = function () {
        var _this = this;
        var _a;
        var i = 0;
        var interval = setInterval(function () {
            var currentFrame = _this.frames[i % _this.frames.length];
            _this.printer.clearTerminal();
            _this.printer.print(_this.option.color === 'random'
                ? colorizer_middleware_1.Colorizer.randomColorize(currentFrame)
                : colorizer_middleware_1.Colorizer.colorize(_this.option.color, currentFrame));
            i++;
            if (_this.option.repeat &&
                i / _this.frames.length >= _this.option.repeat) {
                clearInterval(interval);
            }
        }, 2000 - ((_a = this.option.speed) !== null && _a !== void 0 ? _a : 200));
    };
    return AnimalGenerator;
}());
exports.AnimalGenerator = AnimalGenerator;
