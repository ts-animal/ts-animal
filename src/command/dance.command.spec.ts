import { execSync } from 'child_process';
import { dance } from './dance.command';
import { OptionArgvHelper } from '../helper/option.argv.helper';

jest.mock('../animal-generator');
jest.mock('../helper/option.argv.helper');

describe('dance command', () => {
  let spyLog: jest.SpyInstance;
  let mockAnimal = 'tiger';

  let mockOptionArgvHelper: jest.Mock;

  beforeEach(() => {
    spyLog = jest.spyOn(console, 'log').mockImplementation(() => null);
    mockOptionArgvHelper = jest.fn();
  });

  afterEach(() => {
    spyLog.mockClear();
    jest.clearAllMocks();
  });

  test('dance() should be run', () => {
    dance(mockAnimal);

    expect(OptionArgvHelper).toHaveBeenCalledTimes(1);
  });

  // execute the command with child_process
  test('should log the animal exist', () => {
    const result = execSync(`ts-node src/index.ts ${mockAnimal} --repeat=1`, {
      encoding: 'utf8',
    });

    expect(result).not.toBeNull();
  });
});
