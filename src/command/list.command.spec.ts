import { exec } from 'child_process';
import { listHelper } from '../helper/list.helper';
import { list } from './list.command';

describe('version command', () => {
  let spyLog: jest.SpyInstance;
  const mockList = listHelper().join(', ');

  beforeEach(() => {
    spyLog = jest.spyOn(console, 'log').mockImplementation(() => null);
  });

  afterEach(() => {
    spyLog.mockClear();
  });

  test('list() shoud print list', () => {
    const returns = list();

    expect(spyLog).toHaveBeenCalledWith(mockList);
    expect(returns).toEqual(mockList);
  });

  test('should log the list message with child_process', (done) => {
    exec('ts-node src/index.ts list', { encoding: 'utf8' }, (error, stdout) => {
      if (error) {
        done.fail(error);
        return;
      }

      expect(stdout).toMatch(mockList);

      done();
    });
  });
});
