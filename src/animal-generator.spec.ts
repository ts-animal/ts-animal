import { AnimalGenerator } from './animal-generator';
import { CharmPrinter } from './abstract/charm.printer';
import { IPrinter } from './abstract/printer.interface';

jest.mock('./helper/list.helper', () => ({
  listHelper: jest.fn(() => ['tiger']),
  SRC_FOLDER: '/src',
}));

describe('AnimalGenerator', () => {
  let MockPrinter: IPrinter;

  beforeEach(() => {
    jest.useFakeTimers();
    MockPrinter = new CharmPrinter();
  });
  afterEach(() => {
    jest.clearAllTimers();
  });

  test('should create AnimalGenerator instance', () => {
    const generator = new AnimalGenerator('tiger', MockPrinter);

    expect(generator).toBeInstanceOf(AnimalGenerator);
  });

  test('should getting frames from the zoo', () => {
    const generator = new AnimalGenerator('tiger', MockPrinter);

    expect(generator.frames).toBeDefined();
  });
});
