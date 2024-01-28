import { OptionType } from '../type/option.type';
import { OptionArgvHelper } from './option.argv.helper';

describe('OptionArgvHelper', () => {
  test('it should parse single argument correctly', () => {
    const argv = ['--speed=200'];

    const result: OptionType = OptionArgvHelper(argv);

    expect(result).toEqual({ speed: '200' });
  });
});
