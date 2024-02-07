import { execSync } from 'child_process';
import { help as helpCommand } from './help.command';

describe('help command', () => {
  let spyLog: jest.SpyInstance;

  beforeEach(() => {
    spyLog = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    spyLog.mockClear();
  });

  test('should log the help message on command', () => {
    const returns = helpCommand();

    expect(returns).not.toBeNull();
    expect(returns).toContain('dance');
  });

  test('should log the help message', () => {
    const print = execSync('ts-node src/index.ts help', {
      encoding: 'utf8',
    });

    expect(print).not.toBeNull();
    expect(print).toContain('dance');
  });
});
