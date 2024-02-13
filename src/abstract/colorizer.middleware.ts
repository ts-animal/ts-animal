import { getRandomColor } from '../helper/color.helper';
import { COLORS, ColorType } from '../type/color.type';

export class Colorizer {
  static randomColorize(content: string) {
    const randomColor = getRandomColor();
    return `${randomColor}${content}${COLORS.reset}`;
  }

  static colorize(type: ColorType, content: string) {
    return `${COLORS[type]}${content}${COLORS.reset}`;
  }
}
