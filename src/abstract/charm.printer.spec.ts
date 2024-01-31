import { CharmPrinter } from './charm.printer';

describe('CharmPrinter', () => {
  let charmPrinter: CharmPrinter;

  beforeEach(() => {
    charmPrinter = new CharmPrinter();
  });

  test('should print to the terminal', () => {
    const spyWrite = jest
      .spyOn(process.stdout, 'write')
      .mockImplementation(() => null);

    const content = 'some content';
    charmPrinter.print(content);

    expect(spyWrite).toHaveBeenCalledWith(content);
  });

  test('should reset the terminal', () => {
    charmPrinter.printer.reset = jest.fn();

    charmPrinter.clearTerminal();

    expect(charmPrinter.printer.reset).toHaveBeenCalled();
  });

  test('should colorize content with a specific color', () => {
    const spyWrite = jest
      .spyOn(process.stdout, 'write')
      .mockImplementation(() => null);

    const content = '\x1b[31msome content\x1b[0m';

    charmPrinter.color = 'red';
    charmPrinter.print(content);

    expect(spyWrite).toHaveBeenCalledWith('\x1b[31msome content\x1b[0m');
  });

  test('should random colorize content', () => {
    const spyWrite = jest
      .spyOn(process.stdout, 'write')
      .mockImplementation(() => null);

    const content = '\x1b[31msome content\x1b[0m';
    charmPrinter.randomColor = true;
    charmPrinter.print(content);

    expect(spyWrite).toHaveBeenCalledWith('\x1b[31msome content\x1b[0m');
  });
});
