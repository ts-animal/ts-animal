import { execSync } from 'child_process';
import * as colorHelper from '../helper/color.helper';
import { colors as colorsCommand } from './colors.command';

jest.mock('../helper/color.helper', () => ({
  listColors: jest
    .fn()
    .mockReturnValue(
      '\x1B[30mblack\x1B[0m, \x1B[31mred\x1B[0m, \x1B[32mgreen\x1B[0m, \x1B[33myellow\x1B[0m, \x1B[34mblue\x1B[0m, \x1B[35mmagenta\x1B[0m, \x1B[36mcyan\x1B[0m, \x1B[37mwhite\x1B[0m, \x1B[91mbrightRed\x1B[0m, \x1B[92mbrightGreen\x1B[0m, \x1B[93mbrightYellow\x1B[0m, \x1B[94mbrightBlue\x1B[0m, \x1B[95mbrightMagenta\x1B[0m, \x1B[96mbrightCyan\x1B[0m, \x1B[97mbrightWhite\x1B[0m\n',
    ),
}));

describe('colors command', () => {
  let spyLog: jest.SpyInstance;
  const mockColorsList = colorHelper.listColors();

  beforeEach(() => {
    spyLog = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    spyLog.mockClear();
  });

  test('colors() should list colors', () => {
    const returns = colorsCommand();

    expect(spyLog).toHaveBeenCalledWith(mockColorsList);
    expect(returns).toEqual(mockColorsList);
  });

  // execute the command with child_process
  test('should log the colors to the console', () => {
    const result = execSync('ts-node src/index.ts colors', {
      encoding: 'utf8',
    });

    expect(result).toEqual(mockColorsList);
  });
});
