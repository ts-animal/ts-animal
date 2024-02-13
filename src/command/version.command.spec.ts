import { execSync } from 'child_process';
import { v } from './version.command';
import { version } from '../../package.json';

describe('version command', () => {
  let spyLog: jest.SpyInstance;

  beforeEach(() => {
    spyLog = jest.spyOn(console, 'log').mockImplementation(() => null);
  });

  afterEach(() => {
    spyLog.mockClear();
  });

  test('v() shoud print version', () => {
    const returns = v();

    expect(returns).not.toBeNull();
  });

  test('should log the version message with child_process', () => {
    const print = execSync('ts-node src/index.ts version', {
      encoding: 'utf8',
    });

    expect(print).not.toBeNull();
    expect(print).toContain('v');
  });
});
