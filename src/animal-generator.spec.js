"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_generator_1 = require("./animal-generator");
var charm_printer_1 = require("./abstract/charm.printer");
jest.mock('./helper/list.helper', function () { return ({
    listHelper: jest.fn(function () { return ['tiger']; }),
    SRC_FOLDER: '/src',
}); });
describe('AnimalGenerator', function () {
    var MockPrinter;
    beforeEach(function () {
        jest.useFakeTimers();
        MockPrinter = new charm_printer_1.CharmPrinter();
    });
    afterEach(function () {
        jest.clearAllTimers();
    });
    test('should create AnimalGenerator instance', function () {
        var generator = new animal_generator_1.AnimalGenerator('tiger', MockPrinter);
        expect(generator).toBeInstanceOf(animal_generator_1.AnimalGenerator);
    });
    test('should getting frames from the zoo', function () {
        var generator = new animal_generator_1.AnimalGenerator('tiger', MockPrinter);
        expect(generator.frames).toBeDefined();
    });
});
