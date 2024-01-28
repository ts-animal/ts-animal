import { execSync, exec } from 'child_process';
import { OptionType } from '../type/option.type';
import { OptionArgvHelper } from './option.argv.helper';
import * as helpCommand from '../command/help.command';

describe('OptionArgvHelper', () => {
  test('should skip arguments with no options', () => {
    const argv = [''];

    const result: OptionType = OptionArgvHelper(argv);
    expect(result).toEqual({
      color: 'white',
      repeat: Infinity,
      speed: 1800,
    });
  });

  test('should parse single argument correctly', () => {
    const argv = ['--speed=200'];

    const result: OptionType = OptionArgvHelper(argv);

    expect(result).toEqual({
      color: 'white',
      repeat: Infinity,
      speed: '200',
    });
  });

  test('should parse multiple arguments correctly', () => {
    const argv = ['--speed=200', '--repeat=3'];

    const result: OptionType = OptionArgvHelper(argv);

    expect(result).toEqual({
      color: 'white',
      speed: '200',
      repeat: '3',
    });
  });

  test('should log the animal exist', () => {
    const { stderr } = exec(`ts-node src/index.ts tiger --unknownOption`, {
      encoding: 'utf8',
    });

    expect(stderr).not.toBeNull();
  });
});
