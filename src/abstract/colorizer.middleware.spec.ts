import { getRandomColor } from '../helper/color.helper';
import { Colorizer } from './colorizer.middleware';

jest.mock('../helper/color.helper', () => ({
  getRandomColor: jest.fn(),
  COLOR: { reset: '\x1b[0m', red: '\x1b[31m' },
}));

describe('Colorizer', () => {
  describe('randomColorize', () => {
    test('should random colorize content', () => {
      (getRandomColor as jest.Mock).mockReturnValueOnce('\x1b[91m');

      const content = 'some content';
      const result = Colorizer.randomColorize(content);

      expect(result).toEqual('\x1b[91msome content\x1b[0m');
    });
  });

  describe('colorize', () => {
    test('should colorize content with a specific color', () => {
      const content = 'some content';
      const result = Colorizer.colorize('red', content);

      expect(result).toEqual('\x1b[31msome content\x1b[0m');
    });
  });
});
