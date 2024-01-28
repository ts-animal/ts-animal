import { color, getRandomColor } from '../helper/color.helper';
import { ColorType } from '../type/color.type';

export class Colorizer {
  static randomColorize(content: string) {
    const randomColor = getRandomColor();
    return `${randomColor}${content}${color.reset}`;
  }

  static colorize(type: ColorType, content: string) {
    return `${color[type]}${content}${color.reset}`;
  }
}
