import { execSync } from 'child_process';
import { colors as colorsCommand } from './colors.command';

describe('colors command', () => {
  let spyLog: jest.SpyInstance;

  beforeEach(() => {
    spyLog = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    spyLog.mockClear();
  });

  test('colors() should list colors', () => {
    const returns = colorsCommand();

    expect(returns).not.toBeNull();
    expect(returns).toContain('red');
  });

  test('should log the colors to the console', () => {
    const print = execSync('ts-node src/index.ts colors', {
      encoding: 'utf8',
    });

    expect(print).not.toBeNull();
    expect(print).toContain('red');
  });
});
