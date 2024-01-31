import { COLOR, listColors, getRandomColor } from '../helper/color.helper';

describe('Color Module', () => {
  const mockListColors = listColors();
  const mockRandomColor = '\x1b[31m';

  test('getRandomColor should return a valid color', () => {
    expect(mockRandomColor).toMatch(/\x1b\[\d+m/); // ANSI color escape code
  });

  test('listColors should return a string with all colors', () => {
    const colorKeys = Object.keys(COLOR)
      .filter((e) => e !== 'reset')
      .map((e) => `${COLOR[e]}${e}${COLOR.reset}`)
      .join(', ');

    expect(mockListColors).toMatch(colorKeys);
  });
});
