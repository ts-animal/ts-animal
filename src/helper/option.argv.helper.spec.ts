import { OptionType } from '../type/option.type';
import { OptionArgvHelper } from './option.argv.helper';

describe('OptionArgvHelper', () => {
  test('it should skip arguments with no options', () => {
    const argv = [''];

    const result: OptionType = OptionArgvHelper(argv);
    expect(result).toEqual({});
  });

  test('it should parse single argument correctly', () => {
    const argv = ['--speed=200'];

    const result: OptionType = OptionArgvHelper(argv);

    expect(result).toEqual({ speed: '200' });
  });

  test('it should parse multiple arguments correctly', () => {
    const argv = ['--speed=200', '--repeat=3'];

    const result: OptionType = OptionArgvHelper(argv);

    expect(result).toEqual({ speed: '200', repeat: '3' });
  });

  // 🏗️ on progress on #6, #20 🏗️
  // test('it should skip no-option arguments', () => {
  //   const argv = ['--speed=200', '--repeat=3', '--cat=meow'];

  //   const result: OptionType = OptionArgvHelper(argv);

  //   expect(result).toEqual({ speed: '200', repeat: '3' });
  // });
});
