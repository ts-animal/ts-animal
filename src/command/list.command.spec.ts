import { exec } from 'child_process';
import { list } from './list.command';

describe('version command', () => {
  let spyLog: jest.SpyInstance;

  beforeEach(() => {
    spyLog = jest.spyOn(console, 'log').mockImplementation(() => null);
  });

  afterEach(() => {
    spyLog.mockClear();
  });

  test('list() shoud print list', () => {
    const returns = list();

    expect(returns).not.toBeNull();
    expect(returns).toContain('tiger');
  });

  test('should log the list message with child_process', (done) => {
    exec('ts-node src/index.ts list', { encoding: 'utf8' }, (error, stdout) => {
      if (error) {
        done.fail(error);
        return;
      }

      done();
    });
  });
});
