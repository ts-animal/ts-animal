import { execSync } from 'child_process';
import { v } from './version.command';
import { version } from '../../package.json';

describe('version command', () => {
  let spyLog: jest.SpyInstance;
  const mockVersion = 'v' + version;

  beforeEach(() => {
    spyLog = jest.spyOn(console, 'log').mockImplementation(() => null);
  });

  afterEach(() => {
    spyLog.mockClear();
  });

  test('v() shoud print version', () => {
    const returns = v();

    expect(spyLog).toHaveBeenCalledWith(mockVersion);
    expect(returns).toEqual(mockVersion);
  });

  test('should log the version message with child_process', () => {
    const result = execSync('ts-node src/index.ts version', {
      encoding: 'utf8',
    });

    expect(result).toMatch(mockVersion);
  });
});
