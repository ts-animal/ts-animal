"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dance = void 0;
var charm_printer_1 = require("../abstract/charm.printer");
var animal_generator_1 = require("../animal-generator");
var option_argv_helper_1 = require("../helper/option.argv.helper");
function dance(animal) {
    var printer = new charm_printer_1.CharmPrinter();
    var generator = new animal_generator_1.AnimalGenerator(animal, printer, (0, option_argv_helper_1.OptionArgvHelper)(process.argv));
    generator.setFrames();
    generator.run();
}
exports.dance = dance;
