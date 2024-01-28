import { CharmPrinter } from './charm.printer';

describe('CharmPrinter', () => {
  let charmPrinter: CharmPrinter;

  beforeAll(() => {
    charmPrinter = new CharmPrinter();
  });

  test('should print to the terminal', () => {
    const spyWrite = jest.spyOn(charmPrinter.printer, 'write');

    const content = 'some content';
    charmPrinter.print(content);

    expect(spyWrite).toHaveBeenCalledWith(content);
  });

  test('should set the terminal', () => {
    charmPrinter.printer.reset = jest.fn();

    charmPrinter.clearTerminal();

    expect(charmPrinter.printer.reset).toHaveBeenCalled();
  });
});
