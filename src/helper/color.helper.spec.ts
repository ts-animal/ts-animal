import { color, getRandomColor, listColors } from '../helper/color.helper';

describe('Color Module', () => {
  test('getRandomColor should return a valid color', () => {
    const randomColor = getRandomColor();

    expect(randomColor).toMatch(/\x1b\[\d+m/); // ANSI color escape code
  });

  test('listColors should return a string with all colors', () => {
    const colorsList = listColors();
    const colorKeys = Object.keys(color).filter((e) => e !== 'reset');

    colorKeys.forEach((key) => {
      const colorCode = color[key];
      const expectedString = `${colorCode}${key}${color.reset}`;
      expect(colorsList).toContain(expectedString);
    });
  });
});
