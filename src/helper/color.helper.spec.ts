import { COLOR, getRandomColor, listColors } from '../helper/color.helper';

describe('Color Module', () => {
  test('getRandomColor should return a valid color', () => {
    const randColor = getRandomColor();
    expect(randColor).toMatch(/\x1b\[\d+m/); // ANSI color escape code
  });

  test('listColors should return a string with all colors', () => {
    const result = listColors();
    const colorKeys = Object.keys(COLOR)
      .filter((e) => e !== 'reset')
      .map((e) => `${COLOR[e]}${e}${COLOR.reset}`)
      .join(', ');

    expect(result).toMatch(colorKeys);
  });
});
